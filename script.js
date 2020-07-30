const textInput = document.querySelector('#text-input');
const textInside = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-image');
// const imagePre = document.querySelector('#meme-insert');
// const botonFire = document.querySelector('#fire')
// const botonWater = document.querySelector('#water')
// const botonEarth = document.querySelector('#earth')

function changeText() {
  textInside.innerText = textInput.value;
  textInside.className = 'meme-text';
}
textInput.addEventListener('keyup', changeText);

function loadFile(event) {
  imageInput.src = URL.createObjectURL(event.target.files[0]);
  // imageInput.onload = function () {
  //   URL.revokeObjectURL(imageInput.src); // free memory
  // };
};

// function sI(event) {
//   imageInput.src = event.target.src;
// };

// botonFire.addEventListener('click', function fire() {
//   document.getElementById('meme-image-container').style.border = '3px dashed red';
// });

// botonWater.addEventListener('click', function water() {
//   document.getElementById('meme-image-container').style.border = '5px double blue';
// });

// botonEarth.addEventListener('click', function earth() {
//   document.getElementById('meme-image-container').style.border = '6px groove green';
// });
