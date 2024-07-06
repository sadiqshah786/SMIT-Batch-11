const data = JSON.parse(localStorage.getItem("userData"));
let Username = document.getElementById('name');
let ImageProfile = document.getElementById('img');


const showData = () => {
    const { user, userProfile } = data;
    console.log(userProfile)
    Username.innerText = user;
    ImageProfile.src = userProfile;
}
showData();


const logout = () => {
    localStorage.clear();
    window.location.href = '../signup/index.html'
}