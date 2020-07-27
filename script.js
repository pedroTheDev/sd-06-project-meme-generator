//Variables
let userText = document.getElementById('text-input');
let containerText = document.getElementById('meme-text');
let insertMeme = document.getElementById('meme-insert');
//let divMemeText = document.getElementById('meme-text')


//Receive user text, and write it on the image;
function WriteText() {
    containerText.innerHTML = userText.value;
}

//Upload user image
insertMeme.addEventListener('input', function() {
    img.id = "meme-image";
    img.src = URL.createObjectURL(event.target.files[0]);
})


