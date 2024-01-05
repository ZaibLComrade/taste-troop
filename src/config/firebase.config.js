// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB8AUUZNAL0pBISS-m62GdJSUdvRi_MnE",
  authDomain: "taste-troop.firebaseapp.com",
  projectId: "taste-troop",
  storageBucket: "taste-troop.appspot.com",
  messagingSenderId: "854246267262",
  appId: "1:854246267262:web:6b99c820dbccb54e45bb2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
