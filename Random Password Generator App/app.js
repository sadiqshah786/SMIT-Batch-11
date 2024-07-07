
let password = "ABCDFFGGHaaabcd23234345346@435Q@!"
let storePasswor = '';
let inputValue = document.querySelector('#input');

// Generate random password function
function randompassword() {
    storePasswor = '';
    for (let i = 0; i <= 7; i++) {
        let randomNumber = password[Math.floor(Math.random() * password.length)]
        storePasswor += randomNumber;
    }
    inputValue.value = storePasswor
}
// 

// copy password function
function copypassword() {
    navigator.clipboard.writeText(storePasswor);
}
// 