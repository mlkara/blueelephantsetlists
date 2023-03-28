import { useState } from 'react';
import * as setlistApi from "../../utilities/setlistApi-api"

export default function NewSetlistPage({ user, setUser }) {
  const [setlists, setSetlists] = useState('');
  const [newSetlist, setNewSetlist] = useState('');
  const [artists, setArtists] = useState([]);
  const [venues, setVenues] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [artistFormData, setArtistFormData] = useState('');

  async function searchForArtists(evt) {
    evt.preventDefault();
    const artistResults = await setlistApi.findArtists(artistFormData)
    setArtists(artistResults) 
    console.log(artistResults)
  }
  
  const addSetlist = (event) => {
    event.preventDefault();
    const newSetlistObject = {
      content: newSetlist, 
      date: new Date().toLocaleString()
    };
    setSetlists([...setlists, newSetlistObject]);
    setNewSetlist('');
  };

  return (
  <div>
      <h1>Add Setlist</h1>
    <form onSubmit={searchForArtists}>
      <input type="text" value={artistFormData} onChange={(evt)=> setArtistFormData(evt.target.value)}/>
      <button type="submit">Search</button>
    </form>

    </div>
  )
}


