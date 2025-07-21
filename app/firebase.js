import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJigENnunAcaob6IaF3yhQzCfICdKgEZY",
  authDomain: "capstone-project-62678.firebaseapp.com",
  projectId: "capstone-project-62678",
  storageBucket: "capstone-project-62678.appspot.com",
  messagingSenderId: "344107050490",
  appId: "1:344107050490:web:ffbe556ef0266ecdb9b043",
  measurementId: "G-YTDLZG6HB9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
