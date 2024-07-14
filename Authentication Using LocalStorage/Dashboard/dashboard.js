let Username = document.getElementById('name');
let ImageProfile = document.getElementById('img');
const data = JSON.parse(localStorage.getItem("userData"));


// hum ny find login ek common bna lia hai
let findLogin = data.find((item) => {
    return item.isLogin === true;
});


// agr logout ho chuka hai phir b dashboard par jana chye
// to hm usy wapis login par redirect kr rhy hain 
const redirection = () => {
    if (!findLogin) {
        window.location.href = '../login/login.html'
    }
}
redirection();

const showData = () => {
    const { user, userProfile } = findLogin;
    Username.innerText = user;
    ImageProfile.src = userProfile;
}
showData();



const logout = () => {
    // yhn apko isLogin ko false kr k wapis singup par bjh dyna hai 
    if (findLogin) {
        findLogin.isLogin = false;


        // update localStorage
        localStorage.setItem('userData', JSON.stringify(data))
        window.location.href = '../login/login.html'
    }

}