import { auth,signOut,onAuthStateChanged } from "../firebase.js";

let logout = document.getElementById('logout');

const Logout = ()=>{
    signOut(auth).then(() => {
        Toastify({
            text: "Logout Sucesfully",
            duration: 3000
            }).showToast();
      }).catch((error) => {
        Toastify({
            text: error,
            duration: 3000
            }).showToast();
      });
}

logout.addEventListener('click',Logout)

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = '../Login/login.html'
    } 
  });