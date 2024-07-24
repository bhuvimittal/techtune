// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyStq84PAxwsuWnCS0fMu5F99BbgcHuRw",
  authDomain: "techtune-c8fbf.firebaseapp.com",
  projectId: "techtune-c8fbf",
  storageBucket: "techtune-c8fbf.appspot.com",
  messagingSenderId: "750619314039",
  appId: "1:750619314039:web:1fdb635ff48f34ac420372",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
