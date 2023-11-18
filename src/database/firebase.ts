import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHlzFsUuqBo14ke3G9Br2xQARAA5fNP0s",
  authDomain: "osladri.firebaseapp.com",
  projectId: "osladri",
  storageBucket: "osladri.appspot.com",
  messagingSenderId: "676631597824",
  appId: "1:676631597824:web:80ac0d7dba4ee63db499e5",
  measurementId: "G-BC7CSMHMFG",
};

// const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
// const dbf = getFirestore();

const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const dbf = getFirestore(app);

export { dbf, firebase };
