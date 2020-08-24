const memeImage = document.getElementById('meme-image');
const textInput = document.getElementById('text-input');
const imgContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const memeUm = document.getElementById('meme-1');
const memeDois = document.getElementById('meme-2');
const memeTres = document.getElementById('meme-3');
const memeQuatro = document.getElementById('meme-4');

function caixaTxt() {
  memeText.textContent = textInput.value;
}

function changeBorder() {
  if (event.target === fire) {
    imgContainer.style.borderColor = 'red';
    imgContainer.style.borderWidth = '3px';
    imgContainer.style.borderStyle = 'dashed';
  }
  if (event.target === water) {
    imgContainer.style.borderColor = 'blue';
    imgContainer.style.borderWidth = '5px';
    imgContainer.style.borderStyle = 'double';
  }
  if (event.target === earth) {
    imgContainer.style.borderColor = 'green';
    imgContainer.style.borderWidth = '6px';
    imgContainer.style.borderStyle = 'groove';
  }
}

function changePic() {
  if (event.target === memeQuatro) {
    memeImage.src = '/imgs/meme4.png';
  }
  if (event.target === memeTres) {
    memeImage.src = '/imgs/meme3.png';
  }
  if (event.target === memeDois) {
    memeImage.src = '/imgs/meme2.png';
  }
  if (event.target === memeUm) {
    memeImage.src = '/imgs/meme1.png';
  }
}

textInput.addEventListener('keyup', caixaTxt);
memeInsert.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});
fire.addEventListener('click', changeBorder);
water.addEventListener('click', changeBorder);
earth.addEventListener('click', changeBorder);
memeUm.addEventListener('click', changePic);
memeDois.addEventListener('click', changePic);
memeTres.addEventListener('click', changePic);
memeQuatro.addEventListener('click', changePic);
