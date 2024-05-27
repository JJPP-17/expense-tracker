// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLFwXsCcwfTf50f-E4hH5zaLnj5VRK9Js",
  authDomain: "expense-tracker-a8e72.firebaseapp.com",
  projectId: "expense-tracker-a8e72",
  storageBucket: "expense-tracker-a8e72.appspot.com",
  messagingSenderId: "223076696775",
  appId: "1:223076696775:web:acf5eb127cee15e5b634e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
//firebase login
//firebase init
//firebase deploy