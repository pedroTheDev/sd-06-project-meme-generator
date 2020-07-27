let memeFace = document.getElementById('titleImg');
let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');

memeFace.onmouseover = function () {
  document.getElementById('audio').play();
}

textInput.onkeyup = function () {
  memeText.innerHTML = textInput.value;
}