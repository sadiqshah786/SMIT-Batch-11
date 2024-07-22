// call backs

// setTimeout(fun,time)

// setTimeout(()=>{})

// function greeting() {
//     console.log("hello smitian");
// }
// setTimeout(greeting, 2000);



// function greeting() {
//     console.log("hello smitian");
// }

// function showMessage(greetings) {
//     greetings();
// }

// showMessage(greeting);



// function getData(a) {
//     console.log('data');
//     a();
// }

// getData(getData(getData));







// sync and async
// console.log("hello world 1");
// console.log("hello world 2");
// setTimeout(() => {
//     console.log("hello world 3");
// }, 200);
// console.log('hello world 4');


// callbacks ---> callbacks hell ---->promises 

// promises 
// three state 
//  pending fullfill reject 


// let promise = new Promise((resolve, reject) => {
//     // resolve('hn bhai agya');
//     reject("Topi,.....")
// })

// promise.then((res) => {
//     console.log(res);
// })

// promise.catch((error) => {
//     console.log(error)
// })


// console.log(promise);

let btn = document.getElementById('btn');
let box = document.getElementById('box')
let loader = document.getElementById('loader');
let main = document.querySelector('.main');
function fetchData() {
    loader.classList.add("loader");
    fetch('https://fakestoreapi.com/products')

        .then((res) => {
            return res.json();
        })
        .then((data) => {
            loader.classList.remove("loader");
            main.classList.remove('main');
            data.forEach((value) => {
                box.innerHTML += `
                <div class="col-md-3">
                <div class="mt-4 card" >
                    <img src="${value.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="category">${value.category}</p>
                        <h5 class="card-title">${value.title}</h5>
                        <p class="card-text">${value.description.slice(0, 100)}....</p>
                        <a href="#" class="w-100 btn btn-primary">${value.price}</a>
                    </div>
                </div>`
            })

        })
        .catch((error) => {
            box.innerHTML = `<div class="col-md-3">${error}</div>`
        })
}
fetchData();
// btn.addEventListener('click', fetchData);
// btn.addEventListener("click", () => {
//     fetch('https://fakestoreapi.com/products')
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// })

























