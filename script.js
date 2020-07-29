const textInput = document.getElementById ('text-input');
const memeInsert = document.getElementById ('meme-insert');
const memeText = document.getElementById ('meme-text');
const memeImg = document.getElementById ('meme-image');
const fireButton = document.getElementById ('fire');
const waterButton = document.getElementById ('water');
const earthButton = document.getElementById ('earth');
const imgContainer = document.getElementById ('meme-image-container');
const imgMeme1 = document.getElementById ('meme-1');
const imgMeme2 = document.getElementById ('meme-2');
const imgMeme3 = document.getElementById ('meme-3');
const imgMeme4 = document.getElementById ('meme-4');

textInput.addEventListener('input', function () {
    memeText.innerHTML = textInput.value;
});

memeInsert.addEventListener('change', function (event) {
memeImg.src = URL.createObjectURL(event.target.files[0]);
memeImg.onload = function () {
    URL.revokeObjectURL(memeImg.src);
};
});

fireButton.addEventListener('click', function () {
    imgContainer.style.border = '3px dashed red';
});

waterButton.addEventListener('click', function () {
    imgContainer.style.border = '5px double blue';
});

earthButton.addEventListener('click', function () {
    imgContainer.style.border = '6px groove green';
});

imgMeme1.addEventListener('click', function() {
    memeImg.src = imgMeme1.src;
});
imgMeme2.addEventListener('click', function () {
    memeImg.src = imgMeme2.src;
});
imgMeme3.addEventListener('click', function () {
    memeImg.src = imgMeme3.src;
});
imgMeme4.addEventListener('click', function () {
    memeImg.src = imgMeme4.src;
});
