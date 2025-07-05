// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhYmg8bzKUKXawXMcJlxi86Kaisay0oQU",
  authDomain: "assignment-11-3f281.firebaseapp.com",
  projectId: "assignment-11-3f281",
  storageBucket: "assignment-11-3f281.firebasestorage.app",
  messagingSenderId: "210695378312",
  appId: "1:210695378312:web:9b81c1c266fab0c6bc163d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}