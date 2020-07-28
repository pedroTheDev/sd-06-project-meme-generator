// 
let uploadImg = document.getElementById('meme-insert');
uploadImg.addEventListener('change', function() {
  console.log(event);
  let img = document.createElement('img');
  img.src = URL.createObjectURL(event.target.files[0]); // URL.createObjectURL(this.files[0]) tbm funciona
  img.width = '300';
  img.height = '300';
  let insertImg = document.getElementById('meme-image');
  insertImg.appendChild(img);
});

let text = document.querySelector('#text-input');
text.addEventListener('keyup', function() {
  document.getElementById('meme-text').innerHTML = document.querySelector('#text-input').value;
});

document.querySelector('#fire').addEventListener('click', function() {
  document.querySelector('#meme-image-container').style.border = '3px dashed red';
});

document.querySelector('#water').addEventListener('click', function() {
  document.querySelector('#meme-image-container').style.border = '4px double blue';
});

document.querySelector('#earth').addEventListener('click', function() {
  document.querySelector('#meme-image-container').style.border = '5px groove green';
});