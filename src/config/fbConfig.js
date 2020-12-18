import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/functions";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBDrHV2AZymO7vG78CEXcuZIUEzyqiz2X0",
  authDomain: "city-traffic-analysis.firebaseapp.com",
  databaseURL: "https://city-traffic-analysis.firebaseio.com",
  projectId: "city-traffic-analysis",
  storageBucket: "city-traffic-analysis.appspot.com",
  messagingSenderId: "556775609493",
  appId: "1:556775609493:web:e79c062d0c3b288a3f379c",
  measurementId: "G-7897EC166B",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();

export default firebase;
