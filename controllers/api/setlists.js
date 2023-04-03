const Setlist = require("../../models/setlist")

module.exports = {
  create
}

async function create(req, res) {
  try {
    const setlistInDb = await Setlist.exists({eventDate: req.body.eventDate, venue: req.params.vid, artist: req.params.aid})

    if(setlistInDb) {
      const setlist = await Setlist.findOne({eventDate: req.body.eventDate, venue: req.params.vid, artist: req.params.aid})
      res.json(setlist)
  }

  if(!setlistInDb) {
    const newSetlist =  {
      eventDate: req.body.eventDate, 
      set: req.body.set,
      artist: req.params.aid, 
      venue: req.params.vid
    }
    const setlist = await Setlist.create(newSetlist);
    res.json(setlist)
}
  
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}


