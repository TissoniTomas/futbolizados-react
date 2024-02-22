// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export const db = getFirestore(app)