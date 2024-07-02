// console.log("JAAG JAAO...")

let main = document.querySelector('#main');
let colors = [
    "#FF0000", // Red
    "#00FF00", // Lime
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#800000", // Maroon
    "#008000", // Green
    "#000080", // Navy
    "#808000", // Olive
    "#800080", // Purple
    "#008080", // Teal
    "#808080", // Gray
    "#C0C0C0", // Silver
    "#FFA500", // Orange
    "#A52A2A", // Brown
    "#800000", // Dark Red
    "#008080", // Dark Cyan
    "#00008B", // Dark Blue
    "#8B008B"  // Dark Magenta
]

function showBoxes() {
    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i])
        main.innerHTML += `<div onclick="copy('${colors[i]}')" style="background-color:${colors[i]};" class="box">
           ${colors[i]}

        </div>`
    }

}
showBoxes();


function copy(a) {
    navigator.clipboard.writeText(a);
    alert(a);

}






// // function valuesofSum() {
// //     let a = 10;
// //     let b = 20;
// //     add(a, b);
// // }
// // valuesofSum();

// // function add(value1, value2) {
// //     console.log(value1, value2)
// // }






















// for  inti / condi / updation ++ --
// number of iteration known
// while un
// do while







// let count1 = 0;
// while (count1 < 0) {
//     console.log("hello world");
//     count1++;
// }

// let count = 0;
// do {
//     console.log("hello world");
//     count++;
// }
// while (count < 0);




// for(let i=0; i<=10; i++){
//      console.log("hellow")
// }



// let count1 = 0;
// let arr = [];
// while (count1 <= 10) {
//     let userInput = prompt("Enter your name");
//     arr.push(userInput);
//     count1++;
// }
// console.log(arr)































