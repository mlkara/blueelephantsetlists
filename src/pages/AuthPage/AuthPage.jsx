import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo/Logo';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const logoPhoto = new URL("https://i.imgur.com/srwxbTg.png")

  return (
    <main>

      <img style={{display: "block", marginLeft: "auto", marginRight: "auto"}}src={logoPhoto} />
      <h1></h1>
      <button style={{display: "block", marginLeft: "auto", marginRight: "auto"}}onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>

      {showSignUp ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
      }
    </main>
  );
}