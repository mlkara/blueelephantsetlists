const Artist = require('../models/artist')
const Setlist = require('../models/setlist')

module.exports = {
    new: newArtist, 
    create
}

function newArtist(req, res) {
    Setlist.find({}, function(err, setlist) {
        res.render('artists/new', { title: 'Artist', setlist, setlistId: req.params.id})
    })
};

function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === "") delete req.body[key];
       }
       const setlist = new Setlist(req.body);
  setlist.save(function (err) {
    if (err) return res.redirect("/setlists/new");
    res.redirect(`/setlists/${setlist._id}`);
  });
};