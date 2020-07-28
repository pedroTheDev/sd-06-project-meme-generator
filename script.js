const image =  document.querySelector('#meme-image');
const loadFile = function (event) {
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = function () {
    URL.revokeObjectURL(image.src);
  };
};
const textInput = document.querySelector('#text-input');
const memeInsert = document.querySelector('#meme-text');

textInput.addEventListener('keyup', function () {
  memeInsert.innerText = textInput.value;
})

const memeIpt =  document.querySelector('#meme-insert');
function text() {
  let auxText = document.querySelector('#Text-input').value;
  document.querySelector('#meme-text').textContent = auxText;
}
const container = document.querySelector('#meme-image-container');
const fireELement =  document.querySelector('#fire');
const earthELement =  document.querySelector('#earth');
const waterELement =  document.querySelector('#water');

fireELement.addEventListener('click', function() {
  container.style.background = fireElement;
})
earthELement.addEventListener('click', function() {
  container.style.background = fireElement;
})
waterELement.addEventListener('click', function() {
  container.style.background = fireElement;
})
