import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';;

const firebaseConfig = {
    apiKey: "AIzaSyCAWV1laJZ-NW0inswJyOdQnGzPDK0zGrI",
    authDomain: "ardel-group.firebaseapp.com",
    projectId: "ardel-group",
    storageBucket: "ardel-group.firebasestorage.app",
    messagingSenderId: "165339221137",
    appId: "1:165339221137:web:9b14d0073c2be211ce0330",
    measurementId: "G-Q5GDBPX5FX"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);