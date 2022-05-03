// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8f6uO0b7_58RH2Jv7OEuMOV5LJJSa6sU",
    authDomain: "ceramic-studio-62b6f.firebaseapp.com",
    projectId: "ceramic-studio-62b6f",
    storageBucket: "ceramic-studio-62b6f.appspot.com",
    messagingSenderId: "183735127810",
    appId: "1:183735127810:web:a15ca17f1a0eb65641bc1b",
    measurementId: "G-C9CFPENF05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;