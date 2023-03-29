import { useState, useEffect } from 'react';
import * as setlistApi from "../../utilities/setlistApi-api"
import { useNavigate } from 'react-router-dom'

export default function NewSetlistPage({ user, setUser }) {
  const [setlists, setSetlists] = useState('');
  const [newSetlist, setNewSetlist] = useState('');
  const [artists, setArtists] = useState([]);
  const [venues, setVenues] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [artistFormData, setArtistFormData] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
     



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

  useEffect(() => {
    fetch("https://api.setlist.fm/rest/1.0")
        .then((res) => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setArtists(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
}, []);

if (error) {
    return <>{error.message}</>;
} else if (!isLoaded) {
    return <>loading...</>;
} else {


  return (
  <div>
      <h1>Add Setlist</h1>

    <form onSubmit={searchForArtists}>
      <input type="text" value={artistFormData} onChange={(evt)=> setArtistFormData(evt.target.value)} />
      <button type="submit">Search</button>
    </form>
    </div>
  )

  async function handleFindArtists() {
    await setlistApi.findArtists();
    navigate('/FindArtists');
  }

  <div className="wrapper">
                    <ul className="card-grid">
                        {artists.map((item) => (
                            <li>
                                <article className="card" key={artists}>
                                    <div className="card-content">
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
        }
   
}


