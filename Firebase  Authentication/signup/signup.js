import {auth,createUserWithEmailAndPassword,onAuthStateChanged} from '../firebase.js'

let formFeild = document.querySelectorAll("form input");

const [userEmail, userPassword] = formFeild;
let signUpBtn = document.getElementById('signUpBtn');

const signUp = ()=>{
    event.preventDefault();
    signUpBtn.innerText = 'loading.............'
    createUserWithEmailAndPassword(auth, userEmail.value,userPassword.value)
  .then((userCredential) => {
    signUpBtn.innerText = 'SignUp'
    const user = userCredential.user;
    Toastify({
        text: `Hogya signup....`,
        duration: 3000
        }).showToast();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    signUpBtn.innerText = 'SignUp'
    Toastify({
        text: `${errorMessage}`,
        duration: 3000
        }).showToast();
  });
}

signUpBtn.addEventListener('click',signUp);


onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../Dashboard/dashboard.html'
    } 
  });
  