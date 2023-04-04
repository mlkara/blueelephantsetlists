import { useState, useEffect, useRef } from 'react';
import * as photosAPI from '../../utilities/photos-api';
import PhotoCard from '../../components/PhotoCard/PhotoCard';


export default function ExperienceDetail({ experience }) {
  const [title, setTitle] = useState('');
  const [photos, setPhotos] = useState([]);
  const fileInputRef = useRef();

  useEffect(function () {
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
  console.log(experience.setlist.eventDate)
  return (
    <>
      <h1 style={{ color: "white", textAlign: 'center', display: "inlineBlock" }}>{experience.artist.name}</h1>
      <h2 style={{ color: "white", textAlign: 'center', display: "inlineBlock" }}>Venue: {experience.venue.venueName}</h2>
      <h2 style={{ color: "#697866", textAlign: 'center', display: "inlineBlock" }}>Tour: {experience.tour.name}</h2>
      {/* <h2 style={{ color: "white", textAlign: 'center', display: "inlineBlock" }}>Date: {experience.setlist.eventDate}</h2> */}
      {experience.setlist.set.map((s, idx) =>

        (<h3 style={{ color: "#fd8e67", textAlign: 'center', display: "inlineBlock" }} key={s.name + idx}>{s.name}</h3>))
      

        }


      <main className="App flex-ctr-ctr">
        <section className="flex-ctr-ctr">
          <input type="file" ref={fileInputRef} />
          <input value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Photo Title" />
          <button onClick={handleUpload}>Upload Photo</button>
        </section>
        <section>
          {photos.map(p => <PhotoCard photo={p} key={p._id} />)}
        </section>
      </main>
      <h1 style={{ color: "white", textAlign: 'center', display: "inlineBlock" }}>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</h1>
    </>
  )
}