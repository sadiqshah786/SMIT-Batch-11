let formFeild = document.querySelectorAll("form input");

const [userName, userEmail, userPassword, userPic] = formFeild;

console.log(userName, userEmail, userPassword);

let imgUrl;


let userArrayData = JSON.parse(localStorage.getItem('userData')) || [];


function isLoginAlready() {
    let isLoginHai = userArrayData.find((item) => {
        return item.isLogin === true;
    })
    if (isLoginHai) {
        window.location.href = "../Dashboard/dashboard.html"
    }
}
isLoginAlready();


const signup = () => {
    event.preventDefault();
    if (userName.value !== "" && userEmail.value !== '' && userPassword.value !== '') {
        let alreadyAccount = userArrayData.find((item) => {
            return item.signUpEmail === userEmail.value;
        })

        if (alreadyAccount) {
            alert("Alread email registed");
        }
        else {
            let obj = {
                signUpEmail: userEmail.value,
                signupPassword: userPassword.value,
                user: userName.value,
                userProfile: imgUrl,
                isLogin: false,
            }
            userArrayData.push(obj);
            localStorage.setItem("userData", JSON.stringify(userArrayData));
            window.location.href = '../Login/login.html'
        }





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




const uploadImage = () => {
    let img = userPic.files[0];
    console.log(userPic, img);
    let fileRead = new FileReader();
    // console.log(fileRead)
    fileRead.onload = () => {
        imgUrl = fileRead.result;
        // console.log(fileRead.result);
    }
    fileRead.readAsDataURL(img)
}