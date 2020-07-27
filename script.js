//Variables
let userText = document.getElementById('text-input');
let containerMemes = document.getElementById('meme-image-container');
let insertMeme = document.getElementById('meme-insert');
//let divMemeText = document.getElementById('meme-text')


//Receive user text, and attribute it to the container
function WriteText() {
    containerMemes.innerHTML = userText.value;
}

//Upload user image
insertMeme.addEventListener('input', function() {
    img.id = "meme-image";
    img.src = URL.createObjectURL(this.files[0]);
})


