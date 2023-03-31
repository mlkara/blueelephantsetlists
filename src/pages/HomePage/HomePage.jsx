import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css';


const homePhoto = new URL("https://i.imgur.com/F8ZlkUf.png")

export default function HomePage() {
  
    return (
  <div className='Img'>
      <h1></h1>
     <img style={{ width: '100%', height: '100%' }} src={homePhoto} />
  </div>
    );
  }

//https://i.imgur.com/iP2LZ3P.jpg