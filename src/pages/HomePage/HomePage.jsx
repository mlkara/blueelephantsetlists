import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css';


const homePhoto = new URL("https://i.imgur.com/ihuv4Dm.png")

export default function HomePage() {
  
    return (
  // <div style={{  backgroundImage: `url(${homePhoto})`}}></div>

   <div className='Img'>
      <h1></h1>
     <img style={{  width: '100%', height: '100%' }} src={homePhoto} />
  </div> 
    );
  }

