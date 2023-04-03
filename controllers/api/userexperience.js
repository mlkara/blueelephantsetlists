const UserExperience = require('../../models/userExperience');

module.exports = {
  create,
  delete: deleteUserExperience,
  update,
  getAllUserExperiences
}

function deleteUserExperience(req, res, next) {
  UserExperience.findOne({
    'userExperiences._id': req.params.id,
    'userExperiences.user': req.user._id
  }).then(function (venue) {
    if (!venue) return res.redirect('/userExperiences');
    venue.userExperiences.remove(req.params.id);
    venue.same().then(function () {
      res.redirect(`/venues/${venue.id}`);
    }).catch(function (err) {
      return next(err);
    });
  });
}

async function getAllUserExperiences(req, res) {
  try {
    const allUserExperiences = await UserExperience.find({user: req.user._id}).populate("tour").populate("artist").populate("venue").populate("setlist").exec()
    res.json(allUserExperiences);
  } catch (err) {

    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    req.body.user = req.user._id
    // console.log(req.body)
    const newExperience = await UserExperience.create(req.body);
    const allUserExperiences = await UserExperience.find({user: req.user._id}).populate("tour").populate("artist").populate("venue").populate("setlist").exec()
     console.log(allUserExperiences)
    res.json(allUserExperiences);
  } catch (err) {
    // console.log(err)
    res.status(400).json(err);
  }
};

function update(req, res) {
  Venue.findOne({ 'userExperiences._id': req.params.id }, function (err, userExperience) {
    const userExperienceSubdoc = venue.userExpereience.id(req.params.id);
    if (!userExperienceSubdoc.user.equals(req.user._id)) return res.redirect(`/userExperiences/${userExperience._id}`);
    userExperienceSubdoc.content = req.body.content;
    venue.save(function (err) {
      res.redirect(`/userExperiences/${userExperience._id}`);
    });
  });
};

