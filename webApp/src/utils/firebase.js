// Import Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import Config from "./config";

const firebaseConfig = {
  authDomain: Config.authDomain,
  databaseURL: Config.databaseURL,
  apiKey: Config.apiKey,
  projectId: Config.projectId,
  storageBucket: Config.storageBucket,
  messagingSenderId: Config.messagingSenderId,
  appId: Config.appId,
  measurementId: Config.measurementId,
};
// Configure Firebase
firebase.initializeApp(firebaseConfig);

export const analytics = firebase.analytics();
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
