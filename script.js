// Declaração Global
const memeImage = document.getElementById("meme-image");
const containerMeme = document.getElementById('meme-image-container');
// Tratando o texto digitado e inserindo na imagem
const texto = document.getElementById("text-input");
texto.addEventListener('keyup', () => {
 const textoPronto = document.getElementById("text-input").value;
 document.getElementById("meme-text").innerHTML = textoPronto;
})

// Tratando a imagem e inserindo no container certo
function escolherImagem() {
  memeImage.src = window.URL.createObjectURL(this.files[0]);
}

// Funções das bordas
function fireBorder() {
  containerMeme.classList.remove('original');
  containerMeme.classList.remove('waterClass');
  containerMeme.classList.remove('earthClass');
  containerMeme.classList.add('fireClass');
}

function waterBorder() {
  containerMeme.classList.remove('original');
  containerMeme.classList.remove('earthClass');
  containerMeme.classList.remove('fireClass');
  containerMeme.classList.add('waterClass');
}

function earthBorder() {
  containerMeme.classList.remove('original');
  containerMeme.classList.remove('fireClass');
  containerMeme.classList.remove('waterClass');
  containerMeme.classList.add('earthClass');
}

// Funções para imagem pré-carregada
function imageOne() {
  memeImage.src = "imgs/meme1.png";
}

function imageTwo() {
  memeImage.src = "imgs/meme2.png";
}

function imageThree() {
  memeImage.src = "imgs/meme3.png";
}

function imageFour() {
  memeImage.src = "imgs/meme4.png";
}

// Chamando funções da borda
document.getElementById("fire").addEventListener('click', fireBorder);
document.getElementById("water").addEventListener('click', waterBorder);
document.getElementById("earth").addEventListener('click', earthBorder);

// Chamando função da imagem
document.getElementById("meme-insert").addEventListener('change', escolherImagem);
document.getElementById("meme-1").addEventListener('click', imageOne);
document.getElementById("meme-2").addEventListener('click', imageTwo);
document.getElementById("meme-3").addEventListener('click', imageThree);
document.getElementById("meme-4").addEventListener('click', imageFour);
