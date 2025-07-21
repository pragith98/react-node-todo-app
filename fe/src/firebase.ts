import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9gJImBMk3RJ0QfN7nWjBfiUYs5M4UKJo",
  authDomain: "react-node-todo-app.firebaseapp.com",
  projectId: "react-node-todo-app",
  storageBucket: "react-node-todo-app.firebasestorage.app",
  messagingSenderId: "834380155342",
  appId: "1:834380155342:web:5663f017317d45e000039f",
  measurementId: "G-XDNLPXD4LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);