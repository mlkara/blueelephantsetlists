import { useState, useEffect, useRef } from 'react';
import * as userExperiencesAPI from '../../utilities/userExperiences-api';
import ExperienceDetail from '../../components/ExperienceDetail/ExperienceDetail'
import './UserExperiencePage.css';




const herePhoto = new URL("https://i.imgur.com/iP2LZ3P.jpg")

export default function UserExperiencePage({ userExperiences, setUserExperiences }) {




  const displayExperiences = userExperiences.map(experience => (
    <ExperienceDetail key={experience._id} experience={experience} />
  ))
    // <div style={{  backgroundImage: `url(${backgroundPhoto})`}}>


  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div style={{ backgroundImage: `url(${herePhoto}` }}>
    <div style={{backgroundColor: "white",
    backgroundColor: "#223554",
    color: "white",
    borderRadius: "0.8em",
    boxShadow: "0 0 0 0.4em #fd8e67",
    outline: "0.em solid #fd8e67",
    padding: "12",
    marginLeft: "200px",
    marginRight: "200px",
    position: "relative"
    }}>

   
  
        <h1 style={{ fontWeight: "bold", fontSize: "60px", textAlign: "center", color: "white", alignText: 'center' }}>MY MUSIC</h1>
        <h1 style={{ fontWeight: "bold", textAlign: "center", fontSize: "30px", color: "white" }}>LIVE YOUR MUSIC ADVENTURES</h1>
        <h1 style={{ fontWeight: "bold", textAlign: "center", fontSize: "20px", color: 'white', paddingBottom: "50px" }}>I don't know where I'm going from here, but I promise it won't be boring. —David Bowie</h1>

    </ div>
    </div>
      <div>{displayExperiences}</div>
    </>



  )

}