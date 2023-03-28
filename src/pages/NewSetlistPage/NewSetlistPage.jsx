import { useState, useEffect } from 'react';
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

  }


  // useEffect(function() {
  //   async function getArtist() {
  //     const setlists = await artistsAPI.getAll();
  //     categoriesRef.current = [...new Set(artists.map(item => artists.name))];
  //     setVenues(items);
  //     setActiveCat(categoriesRef.current[0]);
  //   }
  //   getArtists();
  
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


//create input to gather search term'
// {setlists.length === 0 ? <p>No Setlists Yet!</p> :
//   <ul>
//     {setlists.map((setlist, index) => (
//       <li key={index}>
//         {setlist.content}
//         <br />
//         <small>{setlist.date}</small>
//       </li>
//     ))}
//   </ul>
// }

//how to display-need input-display the input that comes back on this same page for all the input that come
// back on the api

//mini form handle searching for the artists - go through the routing 
