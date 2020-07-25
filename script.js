window.onload = function () {
  let memeText = document.querySelector('#meme-text');
  let textInput = document.querySelector('#text-input');

  textInput.addEventListener('input', function() {

    memeText.innerText = textInput.value;
  });

  const fireButton = document.querySelector('#fire');
  const imgContainer = document.querySelector('#meme-image-container');

  fireButton.addEventListener('click', function () {
    imgContainer.style.border = "3px solid red";
  });

  const waterButton = document.querySelector('#water');

  waterButton.addEventListener('click', function () {
    imgContainer.style.border = "3px solid blue";
  });

  const earthButton = document.querySelector('#earth');

  earthButton.addEventListener('click', function () {
    imgContainer.style.border = "3px solid green";
  });
};
