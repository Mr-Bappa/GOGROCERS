// Import Firebase libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7rul9AxNn7p9sbMwyJHLshXvSWEw3HLc",
  authDomain: "gogrocers-9552c-84429.firebaseapp.com",
  projectId: "gogrocers-9552c",
  storageBucket: "gogrocers-9552c.appspot.com",
  messagingSenderId: "157448340415",
  appId: "1:157448340415:web:56bf8b6a2a3f74c4d6570a",
};

// Initialize Firebase and Firebase Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { app, auth, db };
