let image = document.getElementById('pic');
let showImage = document.querySelector('img');


const uploadImage = () => {
    console.log(showImage)
    let img = image.files[0];
    let readFile = new FileReader();
    readFile.onload = () => {
        console.log(readFile.result);
        showImage.src = readFile.result;
    }
    readFile.readAsDataURL(img)
}











// console.log(img.name);


