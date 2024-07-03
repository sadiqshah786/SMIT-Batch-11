let formFeild = document.querySelectorAll("form input");

const [userName, userEmail, userPassword] = formFeild;

console.log(userName, userEmail, userPassword);

// let userArrayData = [];
const signup = () => {
    event.preventDefault();
    if (userName.value !== "" && userEmail.value !== '' && userPassword.value !== '') {
        let obj = {
            signUpEmail: userEmail.value,
            signupPassword: userPassword.value,
            user: userName.value,
        }
        localStorage.setItem("userData", JSON.stringify(obj));
        window.location.href = '../Login/login.html'

    }
    else {
        alert("bhai data to dal do ")
    }
}

console.log(window.location.href)


// const window = {
//     {
//         location:{
//             href: "dffsjdhkdfh"
//         }
//     }

// }

