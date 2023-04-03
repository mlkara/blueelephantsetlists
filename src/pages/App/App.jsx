import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewSetlistPage from '../NewSetlistPage/NewSetlistPage';
import UserExperiencePage from '../UserExperiencePage/UserExperiencePage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import * as userExperiencesAPI from '../../utilities/userExperiences-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [userExperiences, setUserExperiences] = useState([])

  useEffect(function() {
    userExperiencesAPI.getAll().then(experiences => setUserExperiences(experiences));
  }, []);

  return (

  
<main>
  { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          {/* Route components in here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/setlists/new" element={<NewSetlistPage user={user} setUser={setUser} setUserExperiences={setUserExperiences} />} />
          <Route path="/userexperiences" element={<UserExperiencePage userExperiences={userExperiences} setUserExperiences={setUserExperiences}/>} />
        </Routes>
    
       <Footer />
     
      </>
      :
      <AuthPage setUser={setUser} />
  }
</main>

 
  );
}