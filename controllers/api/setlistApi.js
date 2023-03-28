module.exports = {
    findArtists
}

const BASE_URL="api.setlist.fm"
const ARTIST_URL=`/1.0/artist/`

async function findArtists(req, res) {
console.log("findArtists", req.query.q)
}

