// conteiner text
const phrase = document.querySelector('#text-input');
const inImage = document.querySelector('#meme-text');
function getPhrase() {
  inImage.innerHTML = phrase.value;
}
phrase.addEventListener('keyup', getPhrase);