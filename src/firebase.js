// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs_IosmqE_d0okr4I-ZV6IU0lWt1eJFFs",
  authDomain: "education-867b1.firebaseapp.com",
  projectId: "education-867b1",
  storageBucket: "education-867b1.firebasestorage.app",
  messagingSenderId: "1089323140910",
  appId: "1:1089323140910:web:b34849897e4e3f03c31cbf",
  measurementId: "G-CQ86M7GN5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new googleProvider();
