import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWkvI-sy8DPgyj3jgQAxVPW44zkTz3OYI",
  authDomain: "prepwise-eca62.firebaseapp.com",
  projectId: "prepwise-eca62",
  storageBucket: "prepwise-eca62.firebasestorage.app",
  messagingSenderId: "844118503236",
  appId: "1:844118503236:web:221450baccaa210b43b111",
  measurementId: "G-2N3Z1GD5GE",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
