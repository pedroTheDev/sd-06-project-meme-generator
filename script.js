const text = document.getElementById('text-input');
const divText = document.getElementById('meme-text');
text.addEventListener('input', function () {
  divText.innerText = text.value;
});

const inputImg = document.getElementById('meme-insert');
const img = document.getElementById('meme-image');
inputImg.addEventListener('change', function (event) {
  img.src = URL.createObjectURL(event.target.files[0]);
});

const container = document.getElementById('meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');

btnFire.addEventListener('click', () => {
  container.style.border = '3px dashed red';
});

btnWater.addEventListener('click', () => {
  container.style.border = 'blue 5px double';
});

btnEarth.addEventListener('click', () => {
  container.style.border = 'groove green 6px';
});

const imagens = document.querySelectorAll('.mini-image');
imagens.forEach((imagen) => {
  imagen.addEventListener('click', (event) => {
    img.src = event.srcElement.attributes[0].nodeValue;
  });
});
