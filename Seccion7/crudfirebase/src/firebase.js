// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
  apiKey: "AIzaSyDb_6qZniMWJaUhBJnuwN5FUkXqf9W2vYM",
  authDomain: "crudvue-88359.firebaseapp.com",
  projectId: "crudvue-88359",
  storageBucket: "crudvue-88359.appspot.com",
  messagingSenderId: "97105013048",
  appId: "1:97105013048:web:79a4a35d9ca48eadf779cd",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
