

// let formFeilds = document.querySelectorAll('#firstForm input');
// let formFeildsErros = document.querySelectorAll('#firstForm #error');

// let firstForm = document.getElementById('firstForm');
// // let formFeild = document.querySelector('#firstForm input')

// let [fname, lname, email, password] = formFeilds;
// let [fnameError, lnameError, emailError, passwordError] = formFeildsErros;

// let emptyString = /^$/;
// let emailRegx = /^$/;
// let passRegex = /^$/;

// function submitData() {
//     event.preventDefault();

//     let validationObj = [
//         {
//             feild: fname,
//             error: fnameError,
//             regex: emptyString,
//             errorText: "First name is required"
//         },
//         {
//             feild: lname,
//             error: lnameError,
//             regex: emptyString,
//             errorText: "last name is required"
//         },
//         {
//             feild: email,
//             error: emailError,
//             regex: emailRegx,
//             errorText: "Email is required"
//         },
//         {
//             feild: password,
//             error: passwordError,
//             regex: passRegex,
//             errorText: "Password is not fulfill the requirments"
//         },
//     ]
//     console.log(validationObj)
//     validationObj.forEach((values) => {
//         if (values.regex.test(values.feild.value)) {
//             values.feild.style.border = "1px solid red";
//             values.error.innerText = values.errorText;
//             setTimeout(() => {
//                 values.error.innerText = "";
//                 values.feild.style.border = "1px solid #dee2e6";
//             }, 2000)
//         }
//     })


// }

// // function inputChecker(inputvalue, regx) {
// //     return regx.test(inputvalue);
// // }
// // function showError(errorvalue, errorText) {
// //     errorvalue.innerText = values.errorText;
// // }

// // console.log(inputChecker('', emptyString));

// // console.log(inputChecker('', emptyString));


// firstForm.addEventListener('submit', submitData);

const city = 'London'; // Replace with your desired city
const apiKey = 'def4efb6af1fb6807d5e004987ce4fc6'; // Replace with your API key

fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}&units=metric`)
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error('Fetch error:', err);
    });

