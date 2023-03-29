import { useState, useEffect } from 'react';
import * as setlistApi from "../../utilities/setlistApi-api"

export default function NewSetlistPage() {
  const [artists, setArtists] = useState([]);
  const [artistFormData, setArtistFormData] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null)


  async function searchForArtists(evt) {
    evt.preventDefault();
    const artistResults = await setlistApi.findArtists(artistFormData)
    setArtists(artistResults)
    console.log(artistResults)
  }

  function selectArtist(mbid) {
    const selected = artists.find(a => a.mbid === mbid)
    setSelectedArtist(selected)
  }

  console.log("artists", selectedArtist)

  return (

    <div>
      <h1>Artists</h1>

      <form onSubmit={searchForArtists}>
        <input type="text" value={artistFormData} onChange={(evt) => setArtistFormData(evt.target.value)} />
        <button type="submit">Search</button>
      </form>
      {artists.map(function (a) {
        return (
          <div key={a.mbid}
            onClick={() => selectArtist(a.mbid)}>{a.name}
          </div>
        )
      })
      }
      <div>{selectedArtist?.name}</div>
    </div>
  )
}


