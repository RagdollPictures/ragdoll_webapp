import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "ragdollmovies.firebaseapp.com",
  projectId: "ragdollmovies",
  storageBucket: "ragdollmovies.appspot.com",
  messagingSenderId: "378700446428",
  appId: "1:378700446428:web:a22400e639fc2ae2591219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
