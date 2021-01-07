import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBJsTqwL8yjTWW8mrCWgrBird7HI944SIw",
  authDomain: "book-santa.firebaseapp.com",
  databaseURL: "https://book-santa.firebaseio.com",
  projectId: "book-santa",
  storageBucket: "book-santa.appspot.com",
  messagingSenderId: "546422247592",
  appId: "1:546422247592:web:a82af183e05f978755f29d",
  measurementId: "G-MLCQNSGDLH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
