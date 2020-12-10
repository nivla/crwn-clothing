import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDa6dy1ZNTPYl4Pb1nW3jtc2GyhSLfPKVM",
  authDomain: "crwn-db-6e8bc.firebaseapp.com",
  projectId: "crwn-db-6e8bc",
  storageBucket: "crwn-db-6e8bc.appspot.com",
  messagingSenderId: "152282728502",
  appId: "1:152282728502:web:feabbc92c6e09a515d7097",
  measurementId: "G-FCDP4BF3GK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
