// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbpi8pBv2-2j-VI7mLQbB_unvIxC7PB70",
  authDomain: "react-instagram-lookalike.firebaseapp.com",
  projectId: "react-instagram-lookalike",
  storageBucket: "react-instagram-lookalike.appspot.com",
  messagingSenderId: "88360024725",
  appId: "1:88360024725:web:db444c7bf39652f42ef99c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize 2 services
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };