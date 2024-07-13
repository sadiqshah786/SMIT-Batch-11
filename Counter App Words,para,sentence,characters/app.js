function finding() {
    let para = document.getElementById('values');
    let char = document.getElementById('char');
    let sent = document.getElementById('sent');
    let word = document.getElementById('words');
    let parag = document.getElementById('para');

    let characters = para.value.length;
    let words = para.value.split(' ').length;
    let sentens = para.value.split('.').length;
    let paragrphs = para.value.split('\n').length;


    char.innerText = `Total Character: ${characters}`;
    sent.innerText = `Total sen: ${sentens}`;
    word.innerText = `Total word: ${words}`;
    parag.innerText = `Total para: ${paragrphs}`;




}