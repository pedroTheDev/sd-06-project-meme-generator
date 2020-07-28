const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInput = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');
const container = document.querySelector('#meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const preDefinedMemeOne = document.getElementById('meme-1');
const preDefinedMemeTwo = document.getElementById('meme-2');
const preDefinedMemeThree = document.getElementById('meme-3');
const preDefinedMemeFour = document.getElementById('meme-4');

textInput.addEventListener('keyup', function () {
  memeText.innerText = textInput.value;
});

// const loadFile = function (event) {
//   image.src = URL.createObjectURL(event.target.files[0]);
//   image.onload = function () {
//     URL.revokeObjectURL(image.src);
//   };
// };

memeInput.addEventListener('change', function (event) {
  image.src = URL.createObjectURL(event.target.files[0]);
});

fireButton.addEventListener('click', function () {
  container.style.border = '3px dashed red';
});

waterButton.addEventListener('click', function () {
  container.style.border = 'blue 5px double';
});

earthButton.addEventListener('click', function () {
  container.style.border = 'groove green 6px';
});

preDefinedMemeOne.addEventListener('click', function () {
  image.src = './imgs/meme1.png';
});

preDefinedMemeTwo.addEventListener('click', function () {
  image.src = './imgs/meme2.png';
});

preDefinedMemeThree.addEventListener('click', function () {
  image.src = './imgs/meme3.png';
});

preDefinedMemeFour.addEventListener('click', function () {
  image.src = './imgs/meme4.png';
});
