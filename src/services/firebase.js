// src/services/firebase.js (or src/firebase.js, bas same path rakho jahan import kar rahe ho)
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { getAuth } from "firebase/auth";  // 👈 auth import add karo

const firebaseConfig = {
  apiKey: "AIzaSyCyOhQCQKdNMvMNOG8CyaFasrHUUrb53ek",
  authDomain: "urban-a819e.firebaseapp.com",
  databaseURL: "https://urban-a819e-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "urban-a819e",
  storageBucket: "urban-a819e.appspot.com",
  messagingSenderId: "782500494915",
  appId: "1:782500494915:web:c3aa605308eda6ba02def6"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Database
const db = getDatabase(app);

// ✅ Auth
const auth = getAuth(app);

export { db, ref, push, auth }; // 👈 auth bhi export kar diya
