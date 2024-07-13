let Username = document.getElementById('name');
let ImageProfile = document.getElementById('img');
const data = JSON.parse(localStorage.getItem("userData"));



const showData = () => {

    // yhn hm wo data find krngy jo login hoga 
    let findLogin = data.find((item) => {
        return item.isLogin === true;
    })


    const { user, userProfile } = findLogin;
    Username.innerText = user;
    ImageProfile.src = userProfile;
}
showData();


const logout = () => {
    // yhn apko isLogin ko false kr k wapis singup par bjh dyna hai 
    let findLogin = data.find((item) => {
        return item.isLogin === true;
    });
    if (findLogin) {
        findLogin.isLogin = false;

        // update localStorage
        localStorage.setItem('userData', JSON.stringify(data))
        window.location.href = '../signup/index.html'
    }

}