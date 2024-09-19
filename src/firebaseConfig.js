// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBf7xV7zhs0WRzk_8VDkkj9J33MyYZnSQw",
  authDomain: "reinforcementproject-b639a.firebaseapp.com",
  projectId: "reinforcementproject-b639a",
  storageBucket: "reinforcementproject-b639a.appspot.com",
  messagingSenderId: "809193814816",
  appId: "1:809193814816:web:5a6fa923b531a556dff545",
  measurementId: "G-H86F8J42E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
