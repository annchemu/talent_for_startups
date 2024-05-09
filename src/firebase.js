// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzQWn5vbRU-qm8INn7RUWM5MJePr3Pn3A",
  authDomain: "talent-for-startups.firebaseapp.com",
  projectId: "talent-for-startups",
  storageBucket: "talent-for-startups.appspot.com",
  messagingSenderId: "572725120878",
  appId: "1:572725120878:web:09ba4d271612719092fb7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);