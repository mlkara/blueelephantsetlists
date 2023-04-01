const Venue = require("../../models/venue")

module.exports = {
    create
}

async function create(req, res) {
    try {
        const venueInDb = await Venue.exists({setlistApiVenueId: req.body.setlistApiVenueId})
        if(venueInDb) {
            const venue = await Venue.find({setlistApiVenueId: req.body.setlistApiVenueId})
            res.json(venue)
        }
        if(!venueInDb) {
            const venue = await Venue.create(req.body);
            res.json(venue)
        }
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }
}