const sum = (a, b) => {
    return { a: a, b: b };
}
let a = sum(23, 45);
console.log(a);

let a = sum(32, 45);
console.log(a);
let arr = [4, 5, 6, 7];


let a = arr.push(3);
console.log(a);
console.log(arr);




let allFiles = document.querySelector('input');
let allImages = document.querySelector('.allImages');

const uploadFiles = () => {
    let filesData = allFiles.files;

    for (let i = 0; i < filesData.length; i++) {

        // 0
        //    1
        console.log(filesData[i]);
        let reader = new FileReader();
        reader.onload = () => {

            setTimeout(() => {
                allImages.innerHTML += `<img src="${reader.result}"/>`
            }, 1000 * i);

            console.log(reader.result);
        }
        reader.readAsDataURL(filesData[i]);
        //    0
        //    1
    }


}














// for
// for in
// for of


let arr = ["sadiq", "ali", "Anees"];


for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}


for (let values of arr) {
    console.log(values);
}



let data = {
    name: "Sadiq",
    age: 26,
}

for (let keys in data) {
    console.log(data[keys]);
}



function add(a) {
    return a;
}

function sum() {
    console.log("Hello....")
}



add(sum())






// for each loop
// let name = [3, 4, 5, 6, 67, 7];


let a = name.forEach((values, index, arr) => {
    return values;
});
console.log(a);

let b = name.map((values, index, arr) => {
    return values > 5;
})
console.log(b);


let filterdData = name.filter((values, index, arr) => {
    return values > 5;
})
console.log(filterdData);




// Define an array of objects representing different parts of a mobile



// Define an array of objects representing different mobile phones
let mobilePhones = [
    {
        brand: 'Apple',
        model: 'iPhone 13 Pro',
        price: 999,
        specifications: {
            screenSize: '6.1 inches',
            camera: 'Triple 12 MP',
            storage: '128 GB',
            color: 'Graphite'
        }
    },
    {
        brand: 'Samsung',
        model: 'Galaxy S21 Ultra',
        price: 1199,
        specifications: {
            screenSize: '6.8 inches',
            camera: 'Quad 108 MP',
            storage: '256 GB',
            color: 'Phantom Black'
        }
    },
    {
        brand: 'Google',
        model: 'Pixel 6 Pro',
        price: 899,
        specifications: {
            screenSize: '6.7 inches',
            camera: 'Dual 50 MP',
            storage: '128 GB',
            color: 'Stormy Black'
        }
    }
];


let list = document.querySelector('ul');

mobilePhones.forEach((values) => {
    console.log(values.brand);
    list.innerHTML += `<li>${values.brand}</li>`
})


let filterd = mobilePhones.filter((values) => {
    return values.brand.toLowerCase() === "apple";
})
console.log(filterd)

filterd.map((values) => {
    list.innerHTML += `<li>${values.brand}</li>`
})



let serchInput = document.querySelector('#serch');



























let searchInput = document.querySelector('#search');
let list = document.querySelector('ul');

const AllData = () => {
    mobilePhones.forEach((values) => {
        list.innerHTML += `<li>${values.brand}</li>`
    })
}
AllData();


const filterdData = () => {
    let filterValues = mobilePhones.filter((values) => {
        return values.brand.toLowerCase() === searchInput.value.toLowerCase();
    })
    list.innerHTML = ``;
    if (!filterValues.length) {
        list.innerHTML = `<p>No data found</p>`;
    }
    else {
        filterValues.forEach((values) => {
            list.innerHTML += `<li>${values.brand}</li>`
        })
    }

}
const allEmpty = () => {
    if (searchInput.value === '') {
        AllData();
    }
}
allEmpty();
