import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css';

const homePhoto = new URL("https://i.imgur.com/F8ZlkUf.png")

export default function HomePage() {
  
    return (
  <div>
      <h1></h1>
     <img src={homePhoto} />
  </div>
    );
  }