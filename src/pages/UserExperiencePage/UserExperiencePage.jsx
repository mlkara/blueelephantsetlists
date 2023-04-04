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
  <div>
        <h1 style={{ fontSize: "60px", textAlign: "center", color: "white", alignText: 'center', paddingTop: "100px" }}>MY MUSIC</h1>
        <h1 style={{ fontWeight: "bold", textAlign: "center", fontSize: "30px", color: "#697866" }}>LIVE YOUR MUSIC ADVENTURES</h1>
        <h1 style={{ textAlign: "center", fontSize: "20px", color: '#fd8e67', paddingBottom: "50px" }}>I don't know where I'm going from here, but I promise it won't be boring. —David Bowie</h1>
        <h1 style={{ textAlign: 'center', color: "white", display: "inlineBlock" }}>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</h1>
  </div>
      <div>{displayExperiences}</div>
    </>



  )

}