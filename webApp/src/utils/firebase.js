// Import Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import Config from "./config";

const firebaseConfig = {
  authDomain: Config.authdomain,
  databaseURL: Config.databaseurl,
  apiKey: Config.apikey,
  projectId: Config.projectid,
  storageBucket: Config.storagebucket,
  messagingSenderId: Config.messagingsenderid,
  appId: Config.appid,
  measurementId: Config.measurementid,
};
// Configure Firebase
firebase.initializeApp(firebaseConfig);

export const analytics = firebase.analytics();
export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
