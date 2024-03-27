// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArD6svu3JsBCunCXVtZT7AvFD5_Pq1UjI",
  authDomain: "futbolizados-react.firebaseapp.com",
  projectId: "futbolizados-react",
  storageBucket: "futbolizados-react.appspot.com",
  messagingSenderId: "297889756633",
  appId: "1:297889756633:web:48637a8830b705bf0dd5c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)