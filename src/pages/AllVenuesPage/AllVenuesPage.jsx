// import { useState } from 'react';
// import * as setlistApi from "../../utilities/setlistApi-api"

// export default function AllVenuesPage() {
//   const [venues, setVenues] = useState([]);
//   const [venueFormData, setVenueFormData] = useState('');


//   async function searchForVenues(evt) {
//     evt.preventDefault();
//     const venueResults = await setlistApi.findVenues(venueFormData)
//     setVenues(venueResults) 
//     console.log(venueResults)
//   }

//     return (
    
//       <div>
//       <h1>All Venues</h1>

//     <form onSubmit={searchForVenues}>
//       <input type="text" value={venueFormData} onChange={(evt)=> setVenueFormData(evt.target.value)} />
//       <button type="submit">Search</button>
//     </form>
//     </div>

   
//     );
//   }