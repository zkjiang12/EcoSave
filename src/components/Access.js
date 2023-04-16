import {React} from 'react'
import {auth} from '../firebase'
import { GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'



export default function Access(props){

    const setLoggedIn = props.setLogin
    const loggedIn = props.loggedIn

    const Login = async()=>{
        const googleProvider = new GoogleAuthProvider()
        await signInWithPopup(auth, googleProvider)
        setLoggedIn(true)
    }

    const LogOut = async() =>{
        signOut(auth)
        setLoggedIn(false)
    }
    
    return(
        <div className='access'>
            {loggedIn ?
                <button onClick = {LogOut}>Log Out</button>:  
                <button onClick = {Login}>Login</button>
            }
        </div>
    )
}