const Tour = require("../../models/tour")

module.exports = {
    create
}

async function create(req, res) {
    try {
      
        req.body.artist = req.params.aid
        const tourInDb = await Tour.exists({name:req.body.name})
        if(tourInDb) {
            const tour = await Tour.findOne({name:req.body.name})
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