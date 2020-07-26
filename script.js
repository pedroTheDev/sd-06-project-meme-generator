let textInput = document.getElementById('text-input');
let inserText = document.getElementById('meme-text');

let returnText = textInput.addEventListener('input', function (e) {
    inserText.innerText = e.target.value
});

//

let imageInput = document.querySelector('#meme-insert');
let image = document.querySelector('#meme-image');

imageInput.addEventListener('change', function (e) {
    image.src = URL.createObjectURL(e.target.files[0]);
});

// Alteração de bordas
let buttonFire = document.querySelector('#fire');
let buttonWater = document.querySelector('#water');
let buttonEarth = document.querySelector('#earth');
let container = document.querySelector('#meme-image-container')

buttonFire.addEventListener('click', function () {
    container.style.border = '3px dashed red';
});

buttonWater.addEventListener('click', function () {
    container.style.border = '5px double blue';
});

buttonEarth.addEventListener('click', function () {
    container.style.border = '6px groove green';
});

// Alteração memes pré prontos
let meme1 = document.querySelector('#meme-1');
let meme2 = document.querySelector('#meme-2');
let meme3 = document.querySelector('#meme-3');
let meme4 = document.querySelector('#meme-4');

meme1.addEventListener('click', function() {
    image.src = './imgs/meme1.png'
});

meme2.addEventListener('click', function() {
    image.src = './imgs/meme2.png'
});

meme3.addEventListener('click', function() {
    image.src = './imgs/meme3.png'
});

meme4.addEventListener('click', function() {
    image.src = './imgs/meme4.png'
})


image