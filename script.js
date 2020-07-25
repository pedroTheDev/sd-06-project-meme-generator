window.onload = function () {
  let memeText = document.querySelector('#meme-text');
  let textInput = document.querySelector('#text-input');

  textInput.addEventListener('input', function(event) {

    memeText.innerText = textInput.value;
  });

  let fireButton = document.querySelector('#fire');
  let imgContainer = document.querySelector("#meme-image-container");

  fireButton.addEventListener('click', function (event) {
    imgContainer.style.border = "3px solid red"
  });

  let waterButton = document.querySelector('#water');

  waterButton.addEventListener('click', function (event) {
    imgContainer.style.border = "3px solid blue"
  });

  let earthButton = document.querySelector('#earth');

  earthButton.addEventListener('click', function (event) {
    imgContainer.style.border = "3px solid green"
  });
};
