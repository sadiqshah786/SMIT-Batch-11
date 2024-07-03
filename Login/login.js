let formFeild = document.querySelectorAll("form input");

const [loginEmail, loginPassword] = formFeild;


const data = JSON.parse(localStorage.getItem("userData"));

let loader = document.getElementById('loader');
const login = () => {
    event.preventDefault();
    const { signUpEmail, signupPassword } = data;

    if ((signUpEmail === loginEmail.value) &&
        signupPassword === loginPassword.value) {
        // swal({
        //     title: "You are sucssefully Login",
        //     text: "You clicked the button!",
        //     icon: "success",
        //     button: "Aww yiss!",
        // });
        loader.classList.add('loader');
        setTimeout(() => {
            window.location.href = '../Dashboard/dashboard.html'
            loader.classList.remove('loader');
        }, 2000)

    }
    else {
        alert("Invalid Credentils")
    }



    // console.log(signUpEmail, signupPassword);
    // console.log(loginEmail.value, loginPassword.value);
}


