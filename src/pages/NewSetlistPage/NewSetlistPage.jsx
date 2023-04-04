import { useState } from 'react';
import * as externalApi from "../../utilities/setlistApi-api"
import * as artistsApi from "../../utilities/artists-api"
import * as venuesApi from "../../utilities/venues-api"
import * as toursApi from "../../utilities/tours-api"
import * as setlistApi from "../../utilities/setlist-api"
import * as userExperiencesApi from "../../utilities/userExperiences-api"
import { useNavigate } from "react-router-dom";
import './NewSetlistPage.css';

export default function NewSetlistPage({ user, setUser, setUserExperiences }) {
  const [artists, setArtists] = useState([]);
  const [artistFormData, setArtistFormData] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [setlistResults, setSetlistResults] = useState({})
  const [selectedVenue, setSelectedVenue] = useState({})
  const [eventDate, setEventDate] = useState(null)
  const [selectedSetlist, setSelectedSetlist] = useState([])
  const [selectedTour, setSelectedTour] = useState('')
  const navigate = useNavigate();

  //const backgroundPhoto = new URL("https://i.imgur.com/iP2LZ3P.jpg")

  async function searchForArtists(evt) {
    evt.preventDefault();
    const artistResults = await externalApi.findArtists(artistFormData)
    setArtists(artistResults)
  }

  async function getArtistSetlists(selected) {
    const listResults = await externalApi.getArtistSetlists(selected.mbid)
    setSetlistResults(listResults)
  }

  async function submitExperience(evt) {
    evt.preventDefault()
    const tourName = selectedTour ? selectedTour : selectedArtist.name + "Tour"
    const newArtist = await artistsApi.addArtistToDb(selectedArtist)
    const newVenue = await venuesApi.addVenueToDb(selectedVenue)
    const newTour = await toursApi.addTourToDb({ name: tourName }, newArtist._id, newVenue._id)
    console.log(newTour)
    const setData = {
      eventDate,
      set: selectedSetlist,
    }
    const newSetlist = await setlistApi.addSetlistToDb(setData, newVenue._id, newArtist._id)
    const experienceData = {
      artist: newArtist._id,
      venue: newVenue._id,
      tour: newTour._id,
      setlist: newSetlist._id, 
    }
    const allUserExperiences = await userExperiencesApi.createUserExperience(experienceData)
    console.log(allUserExperiences)
    setUserExperiences(allUserExperiences)
    navigate('/userexperiences')
  }

  function selectArtist(mbid) {
    const selected = artists.find(a => a.mbid === mbid)
    setSelectedArtist(selected)
    getArtistSetlists(selected)
                                                    
  }

  function selectVenue(v, date) {
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
    setSelectedTour(v.tour?.name)
  }

  // function UserExperience() {
  //   navigate('/userexperiences')
  // }

  return (
    // <div style={{  backgroundImage: `url(${backgroundPhoto})`}}>
    <div>

     
      <h1 style={{ textAlign: 'center', color: "white", padding: "100px" }}>ADD SETLIST</h1>
    
      <form className="search" onSubmit={searchForArtists}>
        <input placeholder="SEARCH ARTISTS" style={{ width: "500px" }} type="text" value={artistFormData} onChange={(evt) => setArtistFormData(evt.target.value)} />
        <button style={{ textAlign: 'center', display: "inlineBlock", width: "500px" }} type="submit">SEARCH</button>
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
  


      <div>
        {
          setlistResults.hasOwnProperty("code")
            ?
            <h3 style={{ color: "red" }}>NO RESULTS!!<br /> PLEASE CHOOSE ANOTHER ARTIST</h3>
            :
            <div>
              <form style={{ textAlign: 'center', display: "inlineBlock",}}className="button button4">SELECT VENUE</form>
              <div className="artist" style={{ textAlign: 'center', display: "inlineBlock", color: "white", overflowY: "scroll" }}>
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

        <br /><br /><br />
        <div style={{ color: "#fd8e67" }}>{selectedVenue?.venueName}</div>
        <br /><br /><br />
      </div>

      <form className="search" onSubmit={submitExperience}>
        <button style={{ display: "inlineBlock", width: "500px", borderRadius: "30px 30px 30px 30px"}} type="submit">SUBMIT EXPERIENCE</button>
      </form>
      <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />
    </div>

  )
}


