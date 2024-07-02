// // //  let arr = [45,546,6756,67];

// // //  let obj = {
// // //     name : 'sdfsd',
// // //     age:345,
// // //  }


// // // Arry of object 

// // let main = document.querySelector('.main');
// // const arrofObj = [
// //     { name : "Sadiq" , age:26},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// //     {name:"Abdullah",age:34},
// // ]

// // // console.log(arrofObj[1].item2)
// // // console.log(arrofObj[0].item)




// // for(let i=0; i<arrofObj.length; i++){
// //     // let keys = Object.keys(arrofObj[i]);
// //     main.innerHTML += `<tr>
// //     <td>${arrofObj[i].name}</td>
// //     <td>${arrofObj[i].age}</td>

// //     </tr>`
// // }



// function gotoLogin(){
//     window.location.href = 'login.html';

// }

// function redirectToData(){
//     event.preventDefault();
//     window.location.href = 'todo.html'
// }

// // setTimeout(redirectToData,3000);


// // crud application 
// // create read update delete 


// let todoData = [];
// let inputData = document.querySelector('#title');
// let description = document.querySelector('#description')
// let datalist = document.querySelector('.datalist')
// function addTodo(){
//     console.log(description.value)
//     if(inputData.value.trim() === "" || description.value.trim()==="" ){
//         alert("bhai empty hai")
//     }
//     else if(description.value.trim()===""){
//         alert("bhai empty hai")
//     }
//     else{
//         let todos = {
//             title:inputData.value,
//             description:description.value,
//         }
//         todoData.push(todos);
//         inputData.value = ''
//         description.value = ''
//         showTodo()
//     }


    

// }

// // '' agr apny string argument bjhna hai '${}'
// //   number ${}

// function showTodo(){

//     console.log(todoData);


//     if(todoData.length==0){
//         datalist.innerHTML = `<img src="empty-box.png"/>`
//     }
//     else{
//         datalist.innerHTML = '';
//    for(let i=0; i<todoData.length; i++){
//     datalist.innerHTML += `
//    <div class="main">
//    <div>
//     <p>${i} :  ${todoData[i].title}</p>
//     <p>${i} :  ${todoData[i].description}</p>
//    </div>
//     <button onclick="DeleteTodo(${i});">Delete</button>
//     <button onclick="EditTodo(${i});">Edit</button>

//    </div>
//     `
//    } 
//     }
   
// }


// function DeleteTodo(index)
// {
//     todoData.splice(index,1);
//     showTodo();

// }

// function EditTodo(index){
//     let isTitleEdit = prompt("do you want a title edit")
//     let isDescEdit = prompt("do you want a title edit")

//     if(isTitleEdit==="yes"){
//         let Newtitle = prompt("Enter a title:");
//         todoData[index].title = Newtitle
//     }
//     else if(isDescEdit==="yes"){
//         let Newdescription = prompt("enter a description ")
//         todoData[index].description = Newdescription
//     }
//     // todoData.splice(index,1,newValue);
//     showTodo();
// }





// // showTodo();









// // let obj = [
// // {
// //     name : "sdfls"
// // },
// // {
// //     name:"dskfhsdk"
// // }
// // ]
   


// // obj[0].name = "sdkfj"




let data = "Sadiq" , age=34;

// setItem
// getItem
// clearItem
// removeItem

// localStorage --- > 

// localStorage.setItem("name",data);
// localStorage.setItem('age',age);



let arr = [4,546,67,7,789,9,9]


// set data 
localStorage.setItem("number",JSON.stringify(arr));



let abc = document.getElementById('abc');
let localData = JSON.parse(localStorage.getItem("number"));

for(let i=0; i<localData.length; i++){
    abc.innerHTML += `<li>${localData[i]}</li>`
}




// setitem ---> array t0 string(stringyify)
// getitem ---> string t0 normal (parse) 

















