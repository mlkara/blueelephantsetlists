import { useState, useEffect } from 'react';
import * as setlistApi from "../../utilities/setlistApi-api"
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

  // const NewSetlistPhoto = new URL("https://i.imgur.com/iP2LZ3P.jpg")


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
    const dateStr = `${date.slice(6)}-${date.slice(3, 5)}-${date.slice(0, 2)}`
    setEventDate(new Date(dateStr))
    setSelectedVenue(venueInfo)
    setSelectedSetlist(v.sets.set[0].song)
    setSelectedTour(v.tour.name)
  }

  return (
    <div>
      <h1 style={{ color: "white" }}>Add an Experience</h1>
      <form className="search" onSubmit={searchForArtists}>
        <input placeholder="Search Artists" style={{ width: "500px" }} type="text" value={artistFormData} onChange={(evt) => setArtistFormData(evt.target.value)} />
        <button style={{ width: "500px" }} type="submit">Search</button>
      </form>
      <div className="artist" style={{ color: "white" }}>
        {artists.map(function (a) { return (<div key={a.mbid} onClick={() => selectArtist(a.mbid)}>{a.name}</div>) })}
      </div>

      <br />
      <br />
      <br />
      <div style={{ color: "#fd8e67" }}>{selectedArtist?.name}</div>
      <br />
      <br />
      <br />
      {/* <div className='Img'>
            <h1></h1>
            <img style={{ width: '100%', height: '100%' }} src={NewSetlistPhoto} />
          </div> */}


      {
        setlistResults.hasOwnProperty("code")
          ?
          <h3 style={{ color: "red" }}>No Results!!<br /> Please Choose Another Artist</h3>
          :
          <div>
            {/* <h3 style={{ color: "white", paddingRight: "25px"}}>SELECT VENUE</h3> */}
            <form class="button button4">Select Venue</form>
            <div className="artist" style={{ color: "white" }}>
              {setlistResults.hasOwnProperty("setlist")
                ?
                setlistResults.setlist.map(function (s) {
                  return (<h5 key={s.id} onClick={() => selectVenue(s, s.eventDate)}>{s.venue.name}, {s.venue.city.name}: {s.eventDate}</h5>)
                })
                :
                ""
              }


            </div>
          </div>

      }
      <form className="search" onSubmit={submitExperience}>
        <button style={{ width: "500px" }} type="submit">Submit Experience</button>
      </form>
    </div>





  )
}


