import { useState, useEffect, useRef } from 'react';
import * as userExperiencesAPI from '../../utilities/userExperiences-api';
import ExperienceDetail from '../../components/ExperienceDetail/ExperienceDetail'


const herePhoto = new URL("https://i.imgur.com/iP2LZ3P.jpg")

export default function UserExperiencePage({ userExperiences, setUserExperiences }) {




  const displayExperiences = userExperiences.map(experience => (
    <ExperienceDetail key={experience._id} experience={experience} /> 
  ))
    

  return (
    <>
    <div style={{  backgroundImage: `url(${herePhoto})`}}></div>
    <div>
        <h1 style={{ color: "white", alignText: 'center' }}>MY MUSIC</h1>
        <h2 style={{ fontSize: "12px", color: "white" }}>LIVE YOUR MUSIC ADVENTURES</h2>
        <h3 style={{ fontSize: "12px", color: '#fd8e67' }}>I don't know where I'm going from here, but I promise it won't be boring. —David Bowie</h3>
      </div>
      <div>{displayExperiences}</div>
    </>
    


  )

  }