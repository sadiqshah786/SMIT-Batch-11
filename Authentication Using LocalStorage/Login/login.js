let formFeild = document.querySelectorAll("form input");

const [loginEmail, loginPassword] = formFeild;


const data = JSON.parse(localStorage.getItem("userData"));


// agr local storage first time main khali ho or koi 
// redirect krna chaye to.
if (!data === null) {
    function isLoginAlready() {
        let isLoginHai = data.find((item) => {
            return item.isLogin === true;
        })
        if (isLoginHai) {
            window.location.href = "../Dashboard/dashboard.html"
        }
    }
    isLoginAlready();
}

let loader = document.getElementById('loader');
console.log(data)
const login = () => {
    event.preventDefault();


    // agr local storage first time main khali ho or koi 
    // login krna cha rha ho to 
    if (data !== null) {
        let findLogin = data.find((item) => {
            return item.signUpEmail === loginEmail.value;
        })
        if (findLogin) {
            findLogin.isLogin = true;
            localStorage.setItem("userData", JSON.stringify(data));
            if (findLogin.signUpEmail === "admin@admin.com") {
                loader.classList.add('loader');
                setTimeout(() => {
                    window.location.href = '../Dashboard/Admin.html'
                    loader.classList.remove('loader');
                }, 2000)
            }
            else if (findLogin.signUpEmail === loginEmail.value) {
                loader.classList.add('loader');
                setTimeout(() => {
                    window.location.href = '../Dashboard/dashboard.html'
                    loader.classList.remove('loader');
                }, 2000)
            }
        }

        else {
            alert("bhai account bna ly phle...")
        }
    }
    else {
        alert("Database is not available");
    }




    // if ((signUpEmail === loginEmail.value) &&
    //     signupPassword === loginPassword.value) {
    //     // swal({
    //     //     title: "You are sucssefully Login",
    //     //     text: "You clicked the button!",
    //     //     icon: "success",
    //     //     button: "Aww yiss!",
    //     // });
    // loader.classList.add('loader');
    // setTimeout(() => {
    //     window.location.href = '../Dashboard/dashboard.html'
    //     loader.classList.remove('loader');
    // }, 2000)

    // }
    // else {
    //     alert("Invalid Credentils")
    // }



    // console.log(signUpEmail, signupPassword);
    // console.log(loginEmail.value, loginPassword.value);
}


