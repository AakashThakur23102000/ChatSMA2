// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "@firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCru3fdrDLNO58sjvEOZjPmbyVx6NGEvK4",
  authDomain: "chatsma2.firebaseapp.com",
  databaseURL: "http://chatsma2.firebaseio.com",
  projectId: "chatsma2",
  storageBucket: "chatsma2.appspot.com",
  messagingSenderId: "449452859874",
  appId: "1:449452859874:web:545468cb5b7903b39e19bb",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app , db , storage };

