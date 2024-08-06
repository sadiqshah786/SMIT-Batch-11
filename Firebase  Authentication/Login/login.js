import {sendPasswordResetEmail,auth,signInWithEmailAndPassword,onAuthStateChanged} from '../firebase.js';

let formFeild = document.querySelectorAll("form input");

const [loginEmail, loginPassword] = formFeild;

let loginBtn = document.getElementById('loginBtn');
let forgotPass = document.getElementById('forgot-password');




const Login = ()=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Toastify({
        text: `Login Sucesfuly`,
        duration: 3000
        }).showToast();
        console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({
        text: `${errorMessage}`,
        duration: 3000
        }).showToast();
  });
}
loginBtn.addEventListener('click',Login)



const forgotPassword = ()=>{
    sendPasswordResetEmail(auth, loginEmail.value)
  .then(() => {
    Toastify({
        text: `Password sent check email`,
        duration: 3000
        }).showToast();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({
        text: errorMessage,
        duration: 3000
        }).showToast();
       
    // ..
  });
}
forgotPass.addEventListener('click',forgotPassword);






onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../Dashboard/dashboard.html'
    } 
  });
  
