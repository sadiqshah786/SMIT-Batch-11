


// let githubuser = document.getElementById('githubuser');
// console.log(githubuser)
// let btn = document.getElementById('btn');

// const getData = () => {
//     if (githubuser.value.trim() !== '') {
//         ApiCall();
//     }
//     else {
//         alert("Input is empty")
//     }

// }

// function ApiCall() {
//     fetch(`https://api.github.com/users/${githubuser.value}`)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             showData(data)
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }


// btn.addEventListener("click", getData);
// githubuser.addEventListener('keyup', () => {
//     getData();
// });
// githubuser.addEventListener('keyup', (e) => {
//     // e.key === "Enter " ? getData() : null;
//     // e.key === "Enter " && getData();

// });


// let box = document.querySelector('.box');
// function showData(meraData) {
//     console.log(meraData)
//     box.innerHTML = `<img src="${meraData.avatar_url}"/>`
// }

let city = document.getElementById('city');
// function getData() {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=def4efb6af1fb6807d5e004987ce4fc6`)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

let box = document.querySelector('.box');
async function getData() {
    try {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=def4efb6af1fb6807d5e004987ce4fc6`)
        let res = await data.json();
        showData(res);
    }
    catch (err) {
        console.log(err);
    }

}

function showData(res) {
    console.log(res);
    const { name } = res;
    // const { country } = sys;
    box.innerHTML = `
     <p>${res.sys.country} : ${name}</p>
     <p>date day year</p>
     <p></p>
    <img src='https://openweathermap.org/img/wn/${res.weather[0].icon}.png'/>
    `
}






function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        getCurrentData(position.coords.latitude, position.coords.longitude)
    }, (error) => {
        alert(error.message);
    })


}
getCurrentLocation();


async function getCurrentData(lat, lon) {
    try {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=def4efb6af1fb6807d5e004987ce4fc6`)
        let res = await data.json();
        console.log(res);
    }
    catch (error) {
        console.log(error.message)
        alert(error.message);
    }
}






























