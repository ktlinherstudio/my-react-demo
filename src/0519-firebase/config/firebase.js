// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTv-Om4_Y2QWgIDVQkOYqbb6-ClHi0u_s",
    authDomain: "react-auth-4fdef.firebaseapp.com",
    projectId: "react-auth-4fdef",
    storageBucket: "react-auth-4fdef.firebasestorage.app",
    messagingSenderId: "211192108637",
    appId: "1:211192108637:web:b9ac6b0dd8d37a2bb99fb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();