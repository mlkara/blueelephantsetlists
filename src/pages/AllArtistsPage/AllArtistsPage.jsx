import { useState, useEffect } from 'react';
import * as setlistApi from "../../utilities/setlistApi-api"

export default function NewSetlistPage({ user, setUser }) {
  const [artists, setArtists] = useState([]);
  const [artistFormData, setArtistFormData] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null)
  // const backgroundPhoto = new URL("https://i.imgur.com/iP2LZ3P.jpg")


  async function searchForArtists(evt) {
    evt.preventDefault();
    const artistResults = await setlistApi.findArtists(artistFormData)
    setArtists(artistResults)
    console.log(artistResults)
  }

  async function getArtistSetlists() {
    const setlistResults = await setlistApi.getArtistSetlists(selectedArtist.mbid)
    console.log(setlistResults)
  }

  function selectArtist(mbid) {
    const selected = artists.find(a => a.mbid === mbid)
    setSelectedArtist(selected)
    getArtistSetlists()
  }

  return (
    <div>
      <h1 style={{ color: "white" }}>ARTISTS</h1>

      <form className="search" onSubmit={searchForArtists}>
        <input placeholder="SEARCH ARTISTS" style={{ width: "400px" }} className="SearchBar" type="text" value={artistFormData} onChange={(evt) => setArtistFormData(evt.target.value)} />
        <button style={{ width: "400px" }} type="submit">SEARCH</button>
      </form>
      <div className="artist" style={{ color: "white" }}>
        {artists.map(function (a) {
          return (
            <div key={a.mbid}
              onClick={() => selectArtist(a.mbid)}>{a.name}
            </div>

          )
        })
        }
      </div>

      <br />
      <br />
      <br />


      <div style={{ color: "#fd8e67" }}>{selectedArtist?.name}</div>
    </div>





  )

}


