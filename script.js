let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');
let fileInput = document.getElementById('meme-insert');
let image = document.getElementById('meme-image');
const memeContainer = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');

textInput.addEventListener('input', function (event) {
  memeText.innerText = event.target.value;
})

fileInput.addEventListener('change', function (event) {
  image.src = URL.createObjectURL(event.target.files[0]);
})

function customizeContainer(element) {
  memeContainer.classList.remove(...memeContainer.classList);
  memeContainer.classList.add('container');

  switch (element) {
    case 'fire':
      memeContainer.classList.add('fire');
      break;
    case 'water':
      memeContainer.classList.add('water');
      break;
    case 'earth':
      memeContainer.classList.add('earth');
      break;
    default:
      break;
  }
}

fireButton.addEventListener('click', function () {
  customizeContainer('fire');
})

waterButton.addEventListener('click', function () {
  customizeContainer('water');
})

earthButton.addEventListener('click', function () {
  customizeContainer('earth');
})