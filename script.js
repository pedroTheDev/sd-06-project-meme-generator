const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInput = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');

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
