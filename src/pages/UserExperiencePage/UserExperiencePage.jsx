import { useState, useEffect } from "react-router-dom";


export default function UserExperiencePage() {
  const [setlists, setSetlists] = useState([])
  const [userData, setUserData] = useState({})
  
  useEffect(() => {
    async function fetchData() {
      try {
        const userChoices = await userExperiencesApi(createUserExperience);
        setSetlists(setlistData);
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [id, user]);

  async function handleDeleteSetlist(id) {
    if (window.confirm('DELETE SETLIST?')) {
      await GuideApi.deleteGuide(id);
      const guideResponse = await GuideApi.getGuidesForUser(user._id);
      setGuides(guideResponse);
    }
  }
 
  return (
    
 
    <h1>My Experiences</h1>

  

    
  );
  }