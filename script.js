// conteiner
// variaveis
const phrase = document.querySelector('#text-input');
const inImage = document.querySelector('#meme-text');
const image = document.querySelector('#meme-image');
const imgInsert = document.querySelector('#meme-insert');

// function and events
// inserir imagem
function getPhrase() {
  inImage.innerHTML = phrase.value;
}
phrase.addEventListener('keyup', getPhrase);

// inserir imagem
function getImage() {
  image.src = URL.createObjectURL(imgInsert.files[0]);
}
imgInsert.addEventListener('change', getImage);
