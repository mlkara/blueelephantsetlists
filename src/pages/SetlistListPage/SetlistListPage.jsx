export default function SetlistListPage() {
  const [setlists, setSetlists] = useState([]);

  useEffect(function() {
    async function getSetlists() {
      const setlists = await setlistsAPI.getAll();
      setSetlists(setlists);
    }
  }, []); 

  async function handleAddSetlist(postData) {
    const setlist = await setlistsAPI.add(postData);
    setSetlists([...setlists, setlist]);
  }
    return (
      <h1>SetlistListPage</h1>
    );
  }