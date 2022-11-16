import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword, sendPasswordResetEmail } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAg4XE_bEemoOiZmEACpgkjAe9pT1b7l8s",
  authDomain: "ornatehome-c0148.firebaseapp.com",
  projectId: "ornatehome-c0148",
  storageBucket: "ornatehome-c0148.appspot.com",
  messagingSenderId: "420476376780",
  appId: "1:420476376780:web:af283ff18aae2179e39469"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()
const orders = collection(db, 'Australia');
const payment = collection(db, 'payments');

export { db, orders, payment, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword, sendPasswordResetEmail }