const Setlist = require("../../models/setlist")

module.exports = {
  create
}

async function create(req, res) {
  try {
    console.log(req.body, req.params.id)
    // const setlist = await Setlist.create(req.body);
    // res.json(setlist)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}