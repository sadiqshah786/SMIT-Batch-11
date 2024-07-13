function findReplace() {

    let para = document.getElementById('values');
    let findWord = document.getElementById('find');
    let ReplaceWord = document.getElementById('replace');
    let update = document.getElementById('update');
    let userPara = document.getElementById('userpara');


    let replacedValue = para.value.replace(findWord.value, ReplaceWord.value);
    userPara.innerText = para.value;
    update.innerText = replacedValue;

}