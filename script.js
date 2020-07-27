window.onload = function() {

  // insere o texto no container conforme é digitado
  let textInput = document.querySelector('#text-input');
  textInput.addEventListener('change', function () {
    document.querySelector('#meme-text').innerHTML = textInput.value;
  })


}