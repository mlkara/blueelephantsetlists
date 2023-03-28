import { useState, useEffect } from 'react';

export default function NewSetlistPage({ user, setUser }) {
  const [setlists, setSetlists] = useState('');
  const [newSetlist, setNewSetlist] = useState('');
  const [artists, setArtists] = useState('');
  const [venues, setVenues] = useState('');
  const [activeCat, setActiveCat] = useState('');


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

  const searchArtist = async(e) => {
    const searchValue = e.target.value; 
    const { data } = await HTMLOutputElement.get(`/api/artists?search=${searchValue}`);
    setArtists(data.data.artists);
  };

  const searchVenue = async(e) => {
    const searchValue = e.target.value; 
    const { data } = await HTMLOutputElement.get(`/api/venues?search=${searchValue}`);
    setVenues(data.data.venues);
  };

  <div>
      <h1>Add Setlist</h1>
      <form onSubmit={newSetlist}>
        <input value={newSetlist} onChange={(e) => setNewSetlist(e.target.value)} />
        <button type="submit">ADD Setlist</button>
      </form>

      {setlists.length === 0 ? <p>No Setlists Yet!</p> :
        <ul>
          {setlists.map((setlist, index) => (
            <li key={index}>
              {setlist.content}
              <br />
              <small>{setlist.date}</small>
            </li>
          ))}
        </ul>
      }
    </div>
}


//create input to gather search term'

//how to display-need input-display the input that comes back on this same page for all the input that come
// back on the api

//mini form handle searching for the artists - go through the routing 
