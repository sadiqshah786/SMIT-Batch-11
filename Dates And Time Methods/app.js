
let date = new Date();

// tofixed use for the decimal point

let number = 45.7865;

let fixedNumber = number.toFixed(3);
console.log(fixedNumber);


let perc = 65.576543456567;

let percentageFixed = Number(perc.toFixed(2));
console.log(typeof (percentageFixed));



console.log("converted into Number", +percentageFixed);
console.log("converted into Number", parseInt(percentageFixed));
console.log("converted into Number", Number(percentageFixed));






let percentageRound = Math.round(perc);
console.log(percentageRound);


// function building ---> parameter 

function greater(a, b) {
    if (a > b) {
        console.log(`${a}  bara hai ${b} sy`);
    }
    else {
        console.log(`${b}  bara hai ${a} sy`);
    }
}


// arguments 
greater(1, 2);
greater("sadiq", "shah")


function greeting() {
    let name = "Sadiq shah";
    console.log("hello world", name);
}
greeting()


let number = 45.67;

console.log(number.toFixed(3))



function fixedNumber(percentage) {
    console.log(percentage.toFixed(2));
}


// Math.

function abc(){


}


function validationpassword() {
    let password = prompt("Enter a password");
    if (password.length > 8) {
        console.log("yes ok hai");
        let email = prompt("Enter your email address");
        emailValidation(email)
    }
}

function emailValidation(value) {
    console.log(value);
}
function submit() {
    validationpassword();

}



var name = "sadiq";
function nameValidation(value) {
    console.log(name);
}
nameValidation();

function abc() {
    var number2 = "sdfdsfd";
}
console.log(number2);
abc();

function nameValidation(value) {

}





// date time object 

// 1 jan 1970 

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let date = new Date();



let GetDate = date.getDate();
let GetMonth = date.getMonth(); //4
let GetDay = date.getDay();
let getHour = date.getHours();
let getMin = date.getMinutes();
let getSec = date.getSeconds();
let miliSec = date.getMilliseconds();
let getYear = date.getFullYear();



let Time = date.getTime();

console.log(Time);

console.log(daysOfWeek[GetDay])


console.log(months[GetMonth])


// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
// jan feb mar

// s,m, t, w, t, f, s,
// 0   1  2  3   4  5  6

// Month
// 1 - 12(0 - 11);
// days
// 1-7 (0-6)





console.log(typeof (date));
let convert = date.toString();

let splited = convert.split(' ');
console.log(splited);

console.log("Date is : ", splited[2])






let arr = [2, 4, 5, 6];
let index = 1;

console.log(arr[index]);





function showYear() {
    let year = new Date().getFullYear();
    let yearValue = document.getElementById('year');
    yearValue.innerText = year;
}
showYear();










let dateNew = new Date(2022, 5, 12, 4, 22, 10, 100);
let newDate = new Date("2017 15 may 2:15");

console.log(newDate.getFullYear());

// year , month , day , hour , minute , second, ms
console.log(newDate);




// set method 

let newSetMethod = new Date();

newSetMethod.setMonth(1);
newSetMethod.setFullYear(2026);
newSetMethod.setHours(5);
newSetMethod.setMinutes(12);
console.log(newSetMethod);





// set
// get
// date --- y,m,d,h,m,s,ms
// '2022 14 FEB'









let dateObj = new Date("2070 12 Feb 11:12");
let dateObj = new Date(2070, 12, 5, 12, 20, 10, 100);


console.log(dateObj.getMinutes());

let abx = new Date();

abx.setFullYear(2030);
console.log(abx);






function timeWork() {
    let work = document.getElementById('input');
    let showValues = document.getElementById('work');
    showValues.innerText += `${work.value}  \n ${date.getDate()} / ${date.getMonth()} /
      ${date.getFullYear()} ${date.getHours()} : ${date.getMinutes()} \n`

    work.value = '';

}















