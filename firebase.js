// firebase.js - configuration file used in all HTMLs

const firebaseConfig = {
  apiKey: "AIzaSyCpAKZ3Z3rjVBqinm0uW-yZO7iIH7sNeGk",
  authDomain: "quizappms.firebaseapp.com",
  projectId: "quizappms",
  storageBucket: "quizappms.firebasestorage.app",
  messagingSenderId: "619334780581",
  appId: "1:619334780581:web:7e2c456372389fa2b7ef4c",
  measurementId: "G-J1H9PB9S7E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
