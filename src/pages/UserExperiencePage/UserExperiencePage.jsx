// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import * as userExperiencesApi from "../../utilities/userExperiences-api"
// import ReviewForm from '../../components/ReviewForm/ReviewForm'


 const homePhoto = new URL("https://i.imgur.com/iP2LZ3P.jpg")

export default function UserExperiencePage({ user }) {
//  const [userExperience, setUserExperience] = useState();
//  const { id } = useParams();

//   useEffect(() => {
//     async function fetchData() {
//    fetch(``)
//     try {
//       const userExperienceDisplay = await userExperiencesApi.createUserExperience(id);
//       setUserExperience(userExperienceDisplay);
//     } catch (err) {
//     }
//   }
// fetchData();
// }, [id]);
  return (
//     <main>
 <div>
    <h1 style={{ color: "white", alignText: 'center' }}>MY MUSIC</h1>
    <h2 style={{ fontSize: "12px", color: "white" }}>LIVE YOUR MUSIC ADVENTURES</h2>   
    <h3 style={{ fontSize: "12px", color: '#fd8e67'}}>I don't know where I'm going from here, but I promise it won't be boring. —David Bowie</h3>    
   </div>
// <div className='Img'>
//      <img style={{ width: '100%', height: '100%', position: 'sticky' }} src={homePhoto} />
//   </div> 
//   <div>
//       <div>
//         <h1>{userExperience.artist}</h1>
//         <p>{userExperience.review}</p>
//       </div>
  
//         <h2>Reviews</h2>
//         {userExperience.reviews.map((review) => (
//           <div className="review" key={review._id}>
//             <div><h3>{review.setlist} - {new Date(review.createdAt).toLocaleDateString()}</h3></div>
//             <p>{review.content}</p>
//           </div>
//         ))}
//         <ReviewForm userId={id} userExperience={userExperience} setUserExperience={setUserExperience} user={user} />
//       </div>
//     </main>  

    )
  }