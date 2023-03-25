import { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as photosAPI from '../../utilities/photos-api';
// import PhotoCard from '../../components/PhotoCard/PhotoCard';
import AuthPage from '../AuthPage/AuthPage';
import NewSetlistPage from '../NewSetlistPage/NewSetlistPage';
import SetlistListPage from '../SetlistListPage/SetlistListPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [title, setTitle] = useState('');
  const [photos, setPhotos] = useState([]);
  const fileInputRef = useRef();

  useEffect(function() {
    photosAPI.getAll().then(photos => setPhotos(photos));
  }, []);

  async function handleUpload() {
    // Use FormData object to send the inputs in the fetch request
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    const formData = new FormData();
    formData.append('title', title);
    formData.append('photo', fileInputRef.current.files[0]);
    const newPhoto = await photosAPI.upload(formData);
    setPhotos([newPhoto, ...photos]);
    // Clear the description and file inputs
    setTitle('');
    fileInputRef.current.value = '';
  }
  return (
    <main className="App flex-ctr-ctr">
    {/* <section className="flex-ctr-ctr">
      <input type="file" ref={fileInputRef} />
      <input value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Photo Title" />
      <button onClick={handleUpload}>Upload Photo</button>
    </section>
    <section>
      {photos.map(p => <PhotoCard photo={p} key={p._id} />)}
    </section> */}
      
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/setlists/new" element={<NewSetlistPage />} />
              <Route path="/setlists" element={<SetlistListPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
