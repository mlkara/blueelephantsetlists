import { useState, useEffect } from 'react';
import * as setlistApi from "../../utilities/setlistApi-api"
import { useNavigate } from 'react-router-dom'

export default function NewSetlistPage({ user, setUser }) {
  const [artists, setArtists] = useState([]);
  const [artistFormData, setArtistFormData] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [selectedMbid, setSelectedMbid] = useState(null)
     
  async function searchForArtists(evt) {
    evt.preventDefault();
    const artistResults = await setlistApi.findArtists(artistFormData)
    setArtists(artistResults) 
    console.log(artistResults)
  }

  async function artistSelected(evt) {
    evt.preventDefault();
    const artistSelected = await setlistApi.findArtists(artistFormData)
    setSelectedMbid(artistSelected) 
    console.log(artistSelected)
  }

  function selectArtist(mbid) {
    const selected = artists.find(a => a.mbid === mbid)
    setSelectedArtist(selected)
  }
  
console.log("artists", selectedArtist)
  return (
  <div>
      <h1>Add Setlist</h1>

    <form onSubmit={searchForArtists}>
      <input type="text" value={artistFormData} onChange={(evt)=> setArtistFormData(evt.target.value)} />
      <button type="submit">Search</button>
    </form>
    {artists.map(function(a){
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


