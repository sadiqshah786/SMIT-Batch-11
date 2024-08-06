 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
 import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
 
 const firebaseConfig = {
   apiKey: "AIzaSyCsWDr20gqONOXkq7zj2T4OIKUxsKoXlhw",
   authDomain: "smit-batch-11-fc8d1.firebaseapp.com",
   projectId: "smit-batch-11-fc8d1",
   storageBucket: "smit-batch-11-fc8d1.appspot.com",
   messagingSenderId: "231207605801",
   appId: "1:231207605801:web:508867a521ffaf0a1a6e38",
   measurementId: "G-DCD1X6ZBDX"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


 export {sendPasswordResetEmail,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut }