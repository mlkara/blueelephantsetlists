import { useState } from 'react';
import * as setlistApi from "../../utilities/setlistApi-api"

export default function AllArtistsPage() {
  const [artists, setArtists] = useState([]);
  const [artistFormData, setArtistFormData] = useState('');


  async function searchForArtists(evt) {
    evt.preventDefault();
    const artistResults = await setlistApi.findArtists(artistFormData)
    setArtists(artistResults) 
    console.log(artistResults)
  }

    return (
    
      <div>
      <h1>All Artists</h1>

    <form onSubmit={searchForArtists}>
      <input type="text" value={artistFormData} onChange={(evt)=> setArtistFormData(evt.target.value)} />
      <button type="submit">Search</button>
    </form>
    </div>

   
    );
  }