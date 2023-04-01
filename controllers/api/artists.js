const Artist = require("../../models/artist")

module.exports = {
    create
}

async function create(req, res) {
    try {
        const artistInDb = await Artist.exists({mbid:req.body.mbid})
        if(artistInDb) {
            const artist = await Artist.find({mbid:req.body.mbid})
            res.json(artist)
        }
        if(!artistInDb) {
            const artist = await Artist.create(req.body);
            res.json(artist)
        }
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }
}