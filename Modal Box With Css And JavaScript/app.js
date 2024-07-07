
// For hide box button function
function HideBox() {
    box.style.opacity = "0";
    box.style.transition = ".2s";
  }
//   

// For show box button function
  function showBox() {
    box.style.opacity = "1";
    box.style.transition = ".2s";
  }

//************************************************************************** 


// Functionality
let box = document.querySelector(".box");
let showCase = false;
function ShowHide() {
  showCase = !showCase;
  if (showCase) {
    box.style.visibility = "hidden";
  } else {
    box.style.visibility = "visible";
  }
}
//************************************************************************** 


// for Pop up modal functionality
let box2 = document.querySelector('.container');
function openModal() {
    box2.style.display = "flex";
}

function closeModal() {
    box2.style.display = "none";
}

openModal();
 
//************************************************************************** 


// for menu modal functionality
let menu = document.querySelector('.menu');
let isOpen = false;
function showMenu() {
    isOpen = !isOpen;
    if (isOpen) {
        console.log("open")
        menu.style.height = '100px';
    }
    else {
        menu.style.height = '0px';
    }
}

//************************************************************************** 


