const Tour = require("../../models/tour")

module.exports = {
    create
}

async function create(req, res) {
    try {
        console.log("createTour", req.body, req.params.aid, req.params.vid)
        req.body.artist = req.params.aid
        const tourInDb = await Tour.exists({name:req.body.name})
        if(tourInDb) {
            const tour = await Tour.find({name:req.body.name})
            res.json(tour)
        }
        if(!tourInDb) {
            const tour = new Tour(req.body);
            tour.venues.push(req.params.vid);
            await tour.save();
            res.json(tour)
        }
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }
}