
window.onload = function () {
//Referencing elements
let inputTextElement = document.querySelector('#text-input');
let memeTextBox = document.querySelector('#meme-text');

//Functions
let functionalities = {
    addText: (event) => memeTextBox.innerHTML = inputTextElement.value,
    }


//Events
inputTextElement.addEventListener('keypress', functionalities['addText']);
}