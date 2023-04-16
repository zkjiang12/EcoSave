// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsJv1wDmI_ts8hjeoKfgs5tiApwBUN718",
  authDomain: "popup-6e92c.firebaseapp.com",
  projectId: "popup-6e92c",
  storageBucket: "popup-6e92c.appspot.com",
  messagingSenderId: "345527843309",
  appId: "1:345527843309:web:7c50fe556c0c352715cfe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)