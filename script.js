//Variables
let userText = document.getElementById('text-input');
let containerMemes = document.getElementById('meme-image-container');
//let divMemeInsert = document.getElementById('meme-insert');
//let divMemeText = document.getElementById('meme-text')


//Receive user text, and attribute it to the container
function WriteText() {
    containerMemes.innerHTML = userText.value;
}


