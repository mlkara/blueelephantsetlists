export default function NewSetlistPage() {
  const [setlist, setSetlist] = useState('');
  const [newSetlist, setNewSetlist] = useState('');
  const [artist, setArtist] = useState('');

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

  <div>
      <h1>Add Setlist</h1>
      <form onSubmit={addSetlist}>
        <input value={newSetlist} onChange={(e) => setNewSetlist(e.target.value)} />
        <button type="submit">ADD Setlist</button>
      </form>

      {setlist.length === 0 ? <p>No Setlists Yet!</p> :
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
