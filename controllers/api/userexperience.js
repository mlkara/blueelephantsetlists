const UserExperience = require('../../models/userExperience');

module.exports = {
  create,
  delete: deleteUserExperience,
  update
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


function create(req, res) {
//  try {
//   const newUserExperience = await.UserExperience.create(req.body)
//   console.log("create")
// } catch (err) {
//   console.log(err)
//   res.status(400).json(err)
// }
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

