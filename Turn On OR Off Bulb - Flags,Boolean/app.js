

let img = document.querySelector('#img');
let text = document.querySelector('#text');
let body = document.querySelector('body');

let isOn = false;
let count = 0;

function bulbOnOff() {    
    isOn = !isOn;
    if (isOn) {
        img.src = "images/on.png";
        text.innerText = "on";
        img.style.transition = ".2s ease-in-out";
    }
    else {
        img.src = "images/off.png";
        text.innerText = "off";
        img.style.transition = ".2s ease-in-out";
    }
}