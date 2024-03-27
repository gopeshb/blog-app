// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_APIKEY,
  authDomain: "bhai-log-6b764.firebaseapp.com",
  projectId: "bhai-log-6b764",
  storageBucket: "bhai-log-6b764.appspot.com",
  messagingSenderId: "372649936804",
  appId: "1:372649936804:web:52fa883e37870b70526331"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);