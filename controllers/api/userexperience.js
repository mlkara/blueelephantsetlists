const Userexperience = require('../../models/userexperience');

module.exports = {
    show,
    new: newSetlist, 
    create
}

async function newUserexperience(req, res) {
    const artists = await Artist.find({});
        res.render('artists/index', { artists });
}

function show(req, res) {
  Userexperience.findById(req.params.id, function (err, userexperience) {
    Artist.find({ Userexperience: Userexperience._id }, function (err, userexperiences) {
      res.render("userexperiences/show", { userexperience, title: "Your Details", userexperience });
    });
  });
};

function newSetlist(req, res) {
  res.render("setlists/new", { title: "Add Setlist" });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
      }
      const userexperience = new Userexperience(req.body);
      userexperience.save(function (err) {
        if (err) return res.redirect("/userexperiences/new");
        res.redirect(`/userexperiences/${userexperience._id}`);
      });
    };
