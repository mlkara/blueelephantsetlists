import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';


const logoPhoto = new URL("https://i.imgur.com/srwxbTg.png")


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="Nav">
      <img src={logoPhoto} />
      <Link to="/">Home</Link>
      &nbsp;  &nbsp;
      {/* <Link to="/setlists">All Setlists</Link>
      &nbsp; | &nbsp; */}
      <Link to="/userExperiences">My Experiences</Link>
      &nbsp;  &nbsp;
      <Link to="/artists">All Artists</Link>
      &nbsp;  &nbsp;
      {/* <Link to="/concerts">All Concerts</Link>
      &nbsp; | &nbsp; */}
      {/* <Link to="/festivals">All Festivals</Link>
      &nbsp;  &nbsp; */}
      {/* <Link to="/tourposters">All Tour Posters</Link>
      &nbsp; | &nbsp; */}
      {/* <Link to="/tours">All Tours</Link>
      &nbsp; | &nbsp; */}
      <Link to="/venues">All Venues</Link>
      &nbsp;  &nbsp;
      <Link to="/setlists/new">Add Setlist</Link>
      &nbsp;  &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}