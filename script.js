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
  container.className = 'container fire';
});

btnWater.addEventListener('click', () => {
  container.className = 'container water';
});

btnEarth.addEventListener('click', () => {
  container.className = 'container earth';
});
