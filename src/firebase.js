import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBerocWtuLlQOxnLw7_IA9kMTc8sHSC1nY",
  authDomain: "clone-75ee7.firebaseapp.com",
  projectId: "clone-75ee7",
  storageBucket: "clone-75ee7.appspot.com",
  messagingSenderId: "289866675632",
  appId: "1:289866675632:web:267fe747fca21a08779275",
  measurementId: "G-4SSXSCP7QF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
