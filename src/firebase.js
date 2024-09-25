// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyCDL473nYIdcWwWRkSPqBLiiW0dLgweeIo",
  authDomain: "zeta-46b84.firebaseapp.com",
  projectId: "zeta-46b84",
  storageBucket: "zeta-46b84.appspot.com",
  messagingSenderId: "291185909600",
  appId: "1:291185909600:web:c73da3a426dedfcf3d0805",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
