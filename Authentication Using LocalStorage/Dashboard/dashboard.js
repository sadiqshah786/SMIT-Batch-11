const data = JSON.parse(localStorage.getItem("userData"));
let Username = document.getElementById('name');

const showData = () => {
    const { user } = data;
    Username.innerText = user;
}
showData();

showData();