 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "Firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsKNM19R03a6HfDSszz4rYNYuiGJb3z7c",
  authDomain: "realtor-clone-react-a481a.firebaseapp.com",
  projectId: "realtor-clone-react-a481a",
  storageBucket: "realtor-clone-react-a481a.appspot.com",
  messagingSenderId: "869399471041",
  appId: "1:869399471041:web:8f8aac9dfda6e619fb0540"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db= getFirestore()