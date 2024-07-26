let search = document.getElementById('search');
let btn = document.getElementById('btn');
let API_KEY = "def4efb6af1fb6807d5e004987ce4fc6";
let box = document.querySelector('.box');

function fetchData() {
    if (search.value.trim() === "") {
        box.innerHTML = `
            <p class="Error">Please Input a City name</p>
        `;
    } else {
        box.innerHTML = `<p>loading.....</p>`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=${API_KEY}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => showData(data))
            .catch((err) => {
                box.innerHTML = `<img src="/assets/imgs/not-found.png"/>`;
                console.log(err);
            });
    }
    search.value = '';
}

let body = document.querySelector('body');

function showData(data) {
    console.log(data);

    const { country } = data.sys;
    const { temp } = data.main;
    let updatedTemp = Math.floor(temp);
    let { main, icon, id } = data.weather[0];
    let urlImg;

    if (id >= 200 && id <= 232) {
        urlImg = './assets/imgs/scattered-thunderstorms.png';
        body.className += ' bg thunderstorms';
    } else if (id >= 300 && id <= 321) {
        urlImg = './assets/imgs/drizzle.png';
        body.className += ' bg drizzle';
    } else if (id >= 500 && id <= 531) {
        urlImg = './assets/imgs/rain.png';
        body.className += ' bg rain';
    } else if (id >= 600 && id <= 622) {
        urlImg = './assets/imgs/snow.png';
        body.className += ' bg snow';
    } else if (id >= 701 && id <= 781) {
        urlImg = './assets/imgs/cloudy.png';
        body.className += ' bg cloudy';
    } else if (id >= 801 && id <= 804) {
        urlImg = './assets/imgs/clouds.png';
        body.className += ' bg clouds';
    } else {
        urlImg = './assets/imgs/sun.png';
        body.className += ' bg sun';
    }

    box.innerHTML = `
        <img src="${urlImg}"/>
        <p>${data.name}, ${country}</p>
        <h1>${updatedTemp} <sup>0</sup>C</h1>
        <p>${main}</p>
    `;
}

search.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        fetchData();
    }
});

btn.addEventListener('click', fetchData);

let currentLoc = document.querySelector('.location');

function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;
            let Currenturl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
            fetch(Currenturl)
                .then((res) => res.json())
                .then((data) => showData(data))
                .catch((err) => {
                    box.innerHTML = `<img src="/assets/imgs/not-found.png"/>`;
                    console.log(err);
                });
        },
        (error) => {
            const { message } = error;
            box.innerHTML = `<p class="Error">${message}</p>`;
        }
    );
}

currentLoc.addEventListener('click', getCurrentLocation);

// <img src="https://openweathermap.org/img/wn/${icon}.png" alt="">
