module.exports = {
    findArtists
}

const API_KEY= process.env.API_KEY
const BASE_URL="https://api.setlist.fm/rest/1.0"

async function findArtists(req, res) {
  try {
    const ARTIST_URL=`/search/artists?artistName=${req.query.q}`
    const options = {} 
    options.method = "GET"
    options.headers = { 
      'accept': 'application/json',
      'x-api-key': `${API_KEY}`
     };
    const results = await fetch(`${BASE_URL}${ARTIST_URL}`, options)
    const artistsData = await results.json()
    res.status(200).json(artistsData)
  } catch (err) {
    res.status(400).json(err);
  }
}



