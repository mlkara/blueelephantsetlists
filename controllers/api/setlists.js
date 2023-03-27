const Setlist = require('../models/setlist');
const Artist = require('../models/film');

module.exports = {
    index, 
    show,
    new: newSetlist, 
    create
}

async function newSetlist(req, res) {
    const artists = await Artist.find({});
        res.render('artists/index', { artists });
}

function show(req, res) {
  Setlist.findById(req.params.id, function (err, setlist) {
    Artist.find({ setlist: Setlist._id }, function (err, setlists) {
      res.render("setlists/show", { setlist, title: "Setlist Details", setlists });
    });
  });
};

function newSetlist(req, res) {
  res.render("setlists/new", { title: "Add Setlist" });
}

function create(req, res) {
    var trackUrl = req.body.trackUrl
    var match = trackUrl.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);
    if (match && match[1].length == 11) {
      var embeddedUrl = `https://www.youtube.com/embed/${match[1]}`
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      req.body.trackUrl = embeddedUrl;
      req.body.film = req.params.id
      Soundtrack.create(req.body, function (err) {
        if (err) return res.redirect(`/artists/${req.params.id}`)
        res.redirect(`/artists/${req.params.id}`);
      });
    };
  }