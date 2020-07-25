const input = document.getElementById('text-input');
const paragrafo = document.getElementById('meme-text');
function showText() {
  paragrafo.innerText = input.value;
}
input.addEventListener('keyup', showText);
paragrafo.style.textShadow = '5px 5px 5px black';
paragrafo.style.fontSize = '30px';
paragrafo.style.color = 'white';
const container = document.querySelector('#meme-image-container');
function upload() {
  document.getElementById('meme-image').src = window.URL.createObjectURL(this.files[0]);
}
let insert = document.getElementById('meme-insert');
insert.addEventListener('change', upload);
const btn1 = document.querySelector('.fire');
const btn2 = document.querySelector('.water');
const btn3 = document.querySelector('.earth');
function fire() {
  container.style.border = '3px dashed red';
  btn1.style.border = '3px dashed red';
}
btn1.addEventListener('click', fire);
function water() {
  container.style.border = '5px double blue';
  btn2.style.border = '5px double blue';
}
btn2.addEventListener('click', water);
function earth() {
  container.style.border = '6px groove green';
  btn3.style.border = '6px groove green';
}
btn3.addEventListener('click', earth);
