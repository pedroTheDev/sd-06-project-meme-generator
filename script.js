// conteiner text
let phrase = document.querySelector('#text-input');
let inImage = document.querySelector('#meme-text');
phrase.addEventListener('keyup', getPhrase);
function getPhrase() {
  inImage.innerHTML = phrase.value;

}