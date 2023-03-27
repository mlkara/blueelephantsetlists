module.exports = {
    findArtists
}

async function findArtists(req, res) {
        Artist.findById(req.params.id, function (err, artist) {
          setlistApi.find({ artist: Artist._id }, function (err, artists) {
            res.render("artists/show", { artist, title: "Artist Details", artists });
          });
        });
}

