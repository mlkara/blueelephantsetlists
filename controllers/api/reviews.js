const Film = require('../models/film');

module.exports = {
  create,
  delete: deleteReview,
  edit,
  update
};

function deleteReview(req, res, next) {
  UserExperience.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  }).then(function (film) {
    if (!userExperience) return res.redirect('/userExperiences');
    userExperience.reviews.remove(req.params.id);
    userExperience.save().then(function () {
      res.redirect(`/userExperiences/${userExperience._id}`);
    }).catch(function (err) {
      return next(err);
    });
  });
}

function create(req, res) {
  UserExperience.findById(req.params.id, function (err, userExperience) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    userExperience.reviews.push(req.body);
    userExperience.save(function (err) {
      res.redirect(`/userExperiences/${userExperience._id}`);
    });
  });
};

function edit(req, res) {
  UserExperience.findOne({ 'reviews._id': req.params.id }, function (err, userExperience) {
    const review = userExperience.reviews.id(req.params.id);
    res.render('reviews/edit', { review });
  });
};

function update(req, res) {
  UserExperience.findOne({ 'reviews._id': req.params.id }, function (err, userExperience) {
    const reviewSubdoc = userExperience.reviews.id(req.params.id);
    if (!reviewSubdoc.user.equals(req.user._id)) return res.redirect(`/userExperiences/${userExperience._id}`);
    reviewSubdoc.content = req.body.content;
    userExperience.save(function (err) {
      res.redirect(`/userExperiences/${userExperience._id}`);
    });
  });
};
