//iniciando projeto

window.onload = function () {
  let memeText = document.querySelector('#meme-text');
  let textInput = document.querySelector('#text-input');

  textInput.addEventListener('input', function () {
    memeText.innerText = textInput.value;
  });
  
}