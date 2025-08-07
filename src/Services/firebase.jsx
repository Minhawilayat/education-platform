// src/firebase.js

// Firebase core
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase services
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs_IosmqE_d0okr4I-ZV6IU0lWt1eJFFs",
  authDomain: "education-867b1.firebaseapp.com",
  projectId: "education-867b1",
  storageBucket: "education-867b1.appspot.com", // ✅ corrected storage bucket
  messagingSenderId: "1089323140910",
  appId: "1:1089323140910:web:b34849897e4e3f03c31cbf",
  measurementId: "G-CQ86M7GN5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase services exports
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, googleProvider, db, storage };
