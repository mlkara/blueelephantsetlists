import { useState, useEffect } from 'react';
import * as setlistApi from "../../utilities/setlistApi-api"
import { useNavigate } from 'react-router-dom'
import './NewSetlistPage.css';

export default function NewSetlistPage({ user, setUser }) {
  const [artists, setArtists] = useState([]);
  const [artistFormData, setArtistFormData] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [setlistResults, setSetlistResults] = useState({})
  const [selectedVenue, setSelectedVenue] = useState({})
  const [eventDate, setEventDate] = useState(null)
  const [selectedSetlist, setSelectedSetlist] = useState([])
  const [selectedTour, setSelectedTour] = useState('')
 

  async function searchForArtists(evt) {
    evt.preventDefault();
    const artistResults = await setlistApi.findArtists(artistFormData)
    setArtists(artistResults)
  }

  async function getArtistSetlists(selected) {
    const listResults = await setlistApi.getArtistSetlists(selected.mbid)
    setSetlistResults(listResults)
  }

  async function submitExperience(evt) {
    evt.preventDefault()
    const data = {
      artist: selectedArtist,
      venue: selectedVenue, 
      eventDate,
      setlist: selectedSetlist,
      tour: selectedTour,
    }
    console.log(data)
  }

  function selectArtist(mbid) {
    const selected = artists.find(a => a.mbid === mbid)
    setSelectedArtist(selected)
    getArtistSetlists(selected)
  }

  function selectVenue(v, date) {
    console.log(v)
    const venueInfo = {
      setlistApiVenueId: v.venue.id,
      cityName: v.venue.city.name,
      venueName: v.venue.name,
      stateCode: v.venue.city.stateCode,
      state: v.venue.city.state,
      countryName: v.venue.city.country.name, 
      coords: {
        long: v.venue.city.coords.long,
        lat: v.venue.city.coords.lat,
      },
    } 
    const dateStr= `${date.slice(6)}-${date.slice(3, 5)}-${date.slice(0, 2)}`
    setEventDate(new Date(dateStr))
    setSelectedVenue(venueInfo)
    setSelectedSetlist(v.sets.set[0].song)
    setSelectedTour(v.tour.name)
  }

  return (
    <div>
      <h1>Add Setlist</h1>

      <form onSubmit={searchForArtists}>
        <input type="text" value={artistFormData} onChange={(evt) => setArtistFormData(evt.target.value)} />
        <button type="submit">Search</button>
      </form>

      {artists.map(function (a) {return (<div key={a.mbid} onClick={() => selectArtist(a.mbid)}>{a.name}</div>)})}

      <br />
      <br />
      <br />
      <div>{selectedArtist?.name}</div>
      <br />
      <br />
      <br />


     
      {
        setlistResults.hasOwnProperty("code") 
        ? 
        <h3>No Results. Please Choose Another Artist.</h3>
        :
        <div>
          <h3>Please select a venue.</h3>
    
          {setlistResults.hasOwnProperty("setlist") 
            ? 
            setlistResults.setlist.map(function(s){
              return (<h5 key={s.id} onClick={()=>selectVenue(s, s.eventDate)}>{s.venue.name}, {s.venue.city.name}: {s.eventDate}</h5>)})
            :  
            "" 
          }
        </div>
      }
      <form onSubmit={submitExperience}>
        <button type="submit">Submit Experience</button>
      </form>
    </div>



  )
}


