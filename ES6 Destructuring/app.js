

let email = document.getElementById('email');
let pass = document.getElementById('password');
let Uname = document.getElementById('name');


const AddData = () => {
    console.log(email.value, pass.value);
    // let arr = [email.value, pass.value];
    let userObj = {
        userEmail: email.value,
        password: pass.value,
        userName: Uname.value,
    }
    localStorage.setItem("userData", JSON.stringify(userObj));

    window.location.href = './showData.html'
}

// let window = {
//     location: {
//         href: "sdkhdfk"

//     }
// }


let userData = document.getElementById('userEmail');
function ShowData() {

    // str.length > 5 ? str.slice(0, 5) + "...." : str;




    let getData = JSON.parse(localStorage.getItem('userData'));
    const { userName, userEmail, password } = getData;
    userData.innerHTML = `
    <span>${userName.length > 5 ? userName.slice(0, 5) + "...." : userName}</span>
    <span>${userEmail}</span>
    <br/>
    <span>${password}</span>

    `
}
ShowData();





// destructure for an array

// let data = ["sadiq", 26, "BSCS"];
// let qual = data[2];

// const [age, name, qulification] = data;
// console.log(age, name, qulification)


// console.log(qual)


// let objData = {
//     name: "Sadiq",
//     age: 25,
//     qulification: "BSC",
//     istrue: true,
// }
// console.log(objData.qulifications);

// const { name, age, qulifications, istrue } = objData;
// console.log(istrue)
// console.log(name, age, qulifications)










