// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDdYZXqixahtd97mu919k31qep1p6vLPUA",
    authDomain: "hi-twitter-c2970.firebaseapp.com",
    projectId: "hi-twitter-c2970",
    storageBucket: "hi-twitter-c2970.firebasestorage.app",
    messagingSenderId: "1001977895497",
    appId: "1:1001977895497:web:a2ba1925e1659518c17d98"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()