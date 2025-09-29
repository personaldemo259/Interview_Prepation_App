import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHATpiQPG0zJiappNM6GbNIJTssi64ldI",
  authDomain: "prepwise-cff0c.firebaseapp.com",
  projectId: "prepwise-cff0c",
  storageBucket: "prepwise-cff0c.firebasestorage.app",
  messagingSenderId: "429429163801",
  appId: "1:429429163801:web:10934a84bff81a69046788",
  measurementId: "G-0KYLYN11K1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
