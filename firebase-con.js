//import firebase from  "firebase";
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyClh-nnHTuYPIbmGtD4HrWDRiTW8-l_Ok8",
  authDomain: "ecom-fa74d.firebaseapp.com",
  projectId: "ecom-fa74d",
  storageBucket: "ecom-fa74d.appspot.com",
  messagingSenderId: "846338804424",
  appId: "1:846338804424:web:92962caf9415b8e356b3fd",
  measurementId: "G-S6EH4822J0"
};


const app = initializeApp(firebaseConfig);
//export const db= getFirestore(app);
export const auth = getAuth(app);
//const storage=firebase.storage();
export default app;

