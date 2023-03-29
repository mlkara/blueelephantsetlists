import { useState } from 'react'

export default function SetlistListPage() {
  const [setlists, setSetlists] = useState([]);

//   useEffect(function() {
//     async function getSetlists() {
//       const setlists = await setlistAPI.getAll();
//       setSetlists(setlists);
//     }
//   }, []); 

//   async function handleAddSetlist(postData) {
//     const setlist = await setlistAPI.add(postData);
//     setSetlists([...setlists, setlist]);
//   }
    return (
      <h1>SetlistListPage</h1>
    );
  }