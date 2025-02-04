// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXvJPArum_fJ6bR0jw-P07fa-64cgu4Q4",
  authDomain: "otp-app-8c3cd.firebaseapp.com",
  projectId: "otp-app-8c3cd",
  storageBucket: "otp-app-8c3cd.appspot.com",
  messagingSenderId: "1066046823160",
  appId: "1:1066046823160:web:33298d7f38f1f91518790d",
  measurementId: "G-1EJEZ79ZS7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
