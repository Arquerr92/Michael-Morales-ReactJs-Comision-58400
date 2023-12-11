import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4Y0EoOYy6qV-jMMXiiUD4E00Ksi6CSvE",
  authDomain: "alienshop-michaelmorales.firebaseapp.com",
  projectId: "alienshop-michaelmorales",
  storageBucket: "alienshop-michaelmorales.appspot.com",
  messagingSenderId: "263859511986",
  appId: "1:263859511986:web:04359355d54ae4118e9fab"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);