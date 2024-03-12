/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7rul9AxNn7p9sbMwyJHLshXvSWEw3HLc",
  authDomain: "gogrocers-9552c-84429.firebaseapp.com",
  projectId: "gogrocers-9552c",
  storageBucket: "gogrocers-9552c.appspot.com",
  messagingSenderId: "157448340415",
  appId: "1:157448340415:web:56bf8b6a2a3f74c4d6570a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication
export { app,auth };


