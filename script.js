const textInput = document.querySelector('#text-input');
const textInside = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-image');
const imagePre = document.querySelector('#meme-insert');
const botonFire = document.querySelector('#fire')

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

function sI(event) {
  imageInput.src = event.target.src;
};

function earth() {
  imagePre.className = 'meme-container earth';
};

btnFire.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '3px dashed red';
});

// function fire() {
//   imagePre.className = 'meme-container fire';
// }

function water() {
  imagePre.className = 'meme-container water';
};

// if (imageInput === 'Agora estou  usando, CodeClimate') {
//   water();
//   fire();
//   earth();
//   sI(event);
// }
