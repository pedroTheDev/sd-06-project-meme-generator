
window.onload = function () {
//Referencing elements
let inputTextElement = document.querySelector('#text-input');
let memeTextBox = document.querySelector('#meme-text');
let inputImageElement =document.querySelector('#meme-insert');
let memeImage = document.querySelector('#meme-image');

//Functions
let functionalities = {
    addText: (event) => memeTextBox.innerHTML = inputTextElement.value,
    uploadImage: (event) => memeImage.src = window.URL.createObjectURL(inputImageElement.files[0]),
    }


//Events
inputTextElement.addEventListener('keyup', functionalities['addText']);
inputImageElement.addEventListener('change', functionalities['uploadImage']);
console.log(inputImageElement.value)
}
