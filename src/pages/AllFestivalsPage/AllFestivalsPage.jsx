import { useState } from 'react';
import * as setlistApi from "../../utilities/setlistApi-api"

export default function AllArtistsPage() {
  // const [festivals, setFestivals] = useState([]);
  // const [festivalFormData, setFestivalFormData] = useState('');


  // async function searchForFestivals(evt) {
  //   evt.preventDefault();
  //   const artistResults = await setlistApi.findFestivals(festivalFormData)
  //   setFestivals(festivalResults) 
  //   console.log(festivalResults)
  // }

    return (
    
      <div>
      <h1>All Festivals</h1>

    {/* <form onSubmit={searchForFestivals}>
      <input type="text" value={festivalFormData} onChange={(evt)=> setFestivalFormData(evt.target.value)} />
      <button type="submit">Search</button>
    </form> */}
    </div>
   
    );
  }