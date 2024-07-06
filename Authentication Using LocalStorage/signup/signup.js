let formFeild = document.querySelectorAll("form input");

const [userName, userEmail, userPassword, userPic] = formFeild;

console.log(userName, userEmail, userPassword);

let imgUrl;
// let userArrayData = [];
const signup = () => {
    event.preventDefault();
    if (userName.value !== "" && userEmail.value !== '' && userPassword.value !== '') {
        let obj = {
            signUpEmail: userEmail.value,
            signupPassword: userPassword.value,
            user: userName.value,
            userProfile: imgUrl,
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