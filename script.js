// Seção criada para os Containers e para as Variáveis
const frase = document.getElementById('text-input');
const fraseNaImagem = document.getElementById('meme-text');
const image = document.getElementById('meme-image');
const imageInsert = document.getElementById('meme-insert');
// Seção para as Funções e Eventos
function getPhrase() {
  fraseNaImagem.innerHTML = frase.value;
}

frase.addEventListener('keyup', getPhrase);

function getImage() {
  image.src = URL.createObjectURL(imageInsert.files[0]);
}

imageInsert.addEventListener('change', getImage);
