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

//Select meme option from the page
let imageArea = document.querySelector('.image-selection')
let memeOne = document.getElementById('meme-1');
let memeOneSrc = memeOne.src;
let memeTwo = document.getElementById('meme-2');
let memeTwoSrc = memeTwo.src;
let memeThree = document.getElementById('meme-3');
let memeThreeSrc = memeThree.src;
let memeFour = document.getElementById('meme-4');
let memeFourSrc = memeFour.src;
let img = document.querySelector('img');

memeOne.addEventListener('click', function() {
    img.id = 'meme-image';
    img.src = memeOneSrc;
})
memeTwo.addEventListener('click', function() {
    img.id = 'meme-image';
    img.src = memeTwoSrc;
})
memeThree.addEventListener('click', function() {
    img.id = 'meme-image';
    img.src = memeThreeSrc;
})
memeFour.addEventListener('click', function() {
    img.id = 'meme-image';
    img.src = memeFourSrc;
})





