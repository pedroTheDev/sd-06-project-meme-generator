const inputText = document.querySelector('#text-input');
const outputText = document.querySelector('#meme-text');
function insertText() {
  outputText.innerHTML = inputText.value;
}
inputText.addEventListener('keyup', insertText);


const inputImage = document.querySelector('#meme-insert');
const replaceImage = document.querySelector('#meme-image');
function insertImage() {
  replaceImage.src = window.URL.createObjectURL(inputImage.files[0]);
}
inputImage.addEventListener('change', insertImage);

const meme1 = document.querySelector('#meme-1');
const replaceImage01 = document.querySelector('#meme-image');
function insertImage01() {
  replaceImage01.src = 'imgs/meme1.png';
}
meme1.addEventListener('click', insertImage01);

const meme2 = document.querySelector('#meme-2');
const replaceImage02 = document.querySelector('#meme-image');
function insertImage02() {
  replaceImage02.src = 'imgs/meme2.png';
}
meme2.addEventListener('click', insertImage02);

const meme3 = document.querySelector('#meme-3');
const replaceImage03 = document.querySelector('#meme-image');
function insertImage03() {
  replaceImage03.src = 'imgs/meme3.png';
}
meme3.addEventListener('click', insertImage03);

const meme4 = document.querySelector('#meme-4');
const replaceImage04 = document.querySelector('#meme-image');
function insertImage04() {
  replaceImage04.src = 'imgs/meme4.png';
}
meme4.addEventListener('click', insertImage04);

// const meme5 = document.querySelector('#meme-5');
// const replaceImage05 = document.querySelector('#meme-image');
// function insertImage05() {
//   replaceImage05.src = 'imgs/meme5.png';
// }
// meme5.addEventListener('click', insertImage05);

const selectBorder = {
  fire: '3px dashed red',
  water: '5px double blue',
  earth: '6px groove green',
};

const borderFire = document.querySelector('#fire');
const selectRed = document.querySelector('.image-container');
function borderRed() {
  selectRed.style.border = selectBorder.fire;
}
borderFire.addEventListener('click', borderRed);

const borderWater = document.querySelector('#water');
const selectBlue = document.querySelector('.image-container');
function borderBlue() {
  selectBlue.style.border = selectBorder.water;
}
borderWater.addEventListener('click', borderBlue);

const borderEarth = document.querySelector('#earth');
const selectGreen = document.querySelector('.image-container');
function borderGreen() {
  selectGreen.style.border = selectBorder.earth;
}
borderEarth.addEventListener('click', borderGreen);
