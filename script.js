const input = document.getElementById('text-input');
const paragrafo = document.getElementById('meme-text');
function showText() {
  paragrafo.innerText = input.value;
}
input.addEventListener('keyup', showText);
paragrafo.style.textShadow = '5px 5px 5px black';
paragrafo.style.fontSize = '30px';
paragrafo.style.color = 'white';
function upload() {
  document.getElementById('meme-image').src = window.URL.createObjectURL(this.files[0]);
}
const insert = document.getElementById('meme-insert');
insert.addEventListener('change', upload);
const container = document.querySelector('#meme-image-container');
const btn1 = document.querySelector('.fire');
const btn2 = document.querySelector('.water');
const btn3 = document.querySelector('.earth');
function fire() {
  container.style.border = '3px dashed red';
}
btn1.addEventListener('click', fire);
function water() {
  container.style.border = '5px double blue';
}
btn2.addEventListener('click', water);
function earth() {
  container.style.border = '6px groove green';
}
btn3.addEventListener('click', earth);
const img1 = document.getElementById('meme-1');
const img2 = document.getElementById('meme-2');
const img3 = document.getElementById('meme-3');
const img4 = document.getElementById('meme-4');
function meme1() {
  document.getElementById('meme-image').src = 'imgs/meme1.png';
}
img1.addEventListener('click', meme1);
function meme2() {
  document.getElementById('meme-image').src = 'imgs/meme2.png';
}
img2.addEventListener('click', meme2);
function meme3() {
  document.getElementById('meme-image').src = 'imgs/meme3.png';
}
img3.addEventListener('click', meme3);
function meme4() {
  document.getElementById('meme-image').src = 'imgs/meme4.png';
}
img4.addEventListener('click', meme4);
