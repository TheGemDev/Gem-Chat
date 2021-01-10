// Import Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Configure Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCfrS9gSP-xPdNFhA-1LHmMbFdRevlzxLs",
  authDomain: "gem-chat-app.firebaseapp.com",
  databaseURL:
    "https://gem-chat-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gem-chat-app",
  storageBucket: "gem-chat-app.appspot.com",
  messagingSenderId: "378782366095",
  appId: "1:378782366095:web:77ab77050f738839a9b3fa",
  measurementId: "G-ML6QFR1K72",
});

export const analytics = firebase.analytics();
export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
