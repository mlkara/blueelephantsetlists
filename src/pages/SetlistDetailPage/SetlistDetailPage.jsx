export default function SetlistDetailPage() {
  const [isFavorite, setFavorite] = useState(false);

  const onHandleClick = (event, item)
  setFavorite(isFavorite?false:true);
    
  return (
      
      <button> data-name={setlist.name}
     
      error: ''{isFavorite? 'Unlike':'Like'}</button>
    );
  }