//Receive user text, and write it on the image;
let userText = document.getElementById("text-input");
let containerText = document.getElementById("meme-text");
userText.addEventListener("keyup", function() {
    containerText.innerHTML = userText.value;
});

//Upload user image
let insertMeme = document.getElementById("meme-image");
//let uploadedMeme = document.getElementsByTagName("meme-image")[0];
let uploadedMeme = function(event) {
    insertMeme.src = URL.createObjectURL(event.target.files[0]);
}

//Customize the container borders
let memeContainer = document.getElementById('meme-image-container');
const fireStyleButton = document.getElementById('fire');
fireStyleButton.style.backgroundColor = 'red';
fireStyleButton.addEventListener('click', function() {
   memeContainer.classList.add('fireStyle');
   memeContainer.classList.remove('waterStyle');
   memeContainer.classList.remove('earthStyle');
})

const waterStyleButton = document.getElementById('water');
waterStyleButton.style.backgroundColor = 'blue';
waterStyleButton.addEventListener('click', function() {
    memeContainer.classList.add('waterStyle');
    memeContainer.classList.remove('earthStyle');
    memeContainer.classList.remove('fireStyle');
})

const earthStyleButton = document.getElementById('earth');
earthStyleButton.style.backgroundColor = 'green';
earthStyleButton.addEventListener('click', function() {
    memeContainer.classList.add('earthStyle');
    memeContainer.classList.remove('waterStyle');
    memeContainer.classList.remove('fireStyle');
})



