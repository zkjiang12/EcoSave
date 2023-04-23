import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import jiao from '/Users/zikangjiang/ChromeExtension/app/src/chub.png';

export default function Access(props) {

  const setLoggedIn = props.setLogin;
  const loggedIn = props.loggedIn;

  const Login = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
    setLoggedIn(true);
  }

  const LogOut = async () => {
    signOut(auth);
    setLoggedIn(false);
  }

  return (
    <div className='access'>
        <h1  className='app--title'>Eco Save</h1> {/* Center the title */}
        <form className='signin--form'>
            <input placeholder = 'Email...' className='login--inputs'></input>
            <input placeholder = 'Password...' className='login--inputs'></input>
            <button className = 'signin--button'>Sign In</button>
            <span className='google--auth' type = 'button'>Sign in with Google</span> 
        </form>
       
    </div>
  );
}
