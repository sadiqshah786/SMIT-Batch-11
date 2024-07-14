function tableGenerator() {
    let tableNumber = document.querySelector('#tableNumber');
    let tableRange = document.querySelector('#tableRange');
    let table = document.querySelector('#table');
    let numbers = document.querySelector('#number');


    numbers.innerText = `User input ${tableNumber.value}....`;

    if (tableNumber.value === "" && tableRange.value === "") {
        swal({
            title: "Error",
            text: "Inputs are Empty",
            icon: "error",

        });
    }
    else {
        for (let i = 1; i <= tableRange.value; i++) {
            table.innerText += `${tableNumber.value} x ${i} = ${tableNumber.value * i} \n`;
        }
    }

    tableNumber.value = '';
    tableRange.value = '';
}