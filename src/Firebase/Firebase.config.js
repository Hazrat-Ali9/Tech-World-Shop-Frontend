// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlGArISUVraY6eRpQiF-kt8WC63geKz8s",
  authDomain: "techworld-shop.firebaseapp.com",
  projectId: "techworld-shop",
  storageBucket: "techworld-shop.appspot.com",
  messagingSenderId: "272891332392",
  appId: "1:272891332392:web:a99d07eaaddf825ce2f21d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)
export default app