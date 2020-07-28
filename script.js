function clearDivImage() {
  let memeImg = document.querySelector('#meme-image');
  if (memeImg.children.length > 0) {
    memeImg.removeChild(memeImg.children[0]);
  }
}

let uploadImg = document.getElementById('meme-insert');
uploadImg.addEventListener('change', function() {
  // console.log(event);
  clearDivImage();
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
  document.querySelector('#meme-image-container').style.border = '5px double blue';
});

document.querySelector('#earth').addEventListener('click', function() {
  document.querySelector('#meme-image-container').style.border = '6px groove green';
});

document.getElementById('meme-1').addEventListener('click', function() {
  clearDivImage();
  let img = document.createElement('img');
  img.src = 'imgs/meme1.png'
  img.width = '300';
  img.height = '300';
  let insertImg = document.getElementById('meme-image');
  insertImg.appendChild(img);
});

document.getElementById('meme-2').addEventListener('click', function() {
  clearDivImage();
  let img = document.createElement('img');
  img.src = 'imgs/meme2.png'
  img.width = '300';
  img.height = '300';
  let insertImg = document.getElementById('meme-image');
  insertImg.appendChild(img);
});

document.getElementById('meme-3').addEventListener('click', function() {
  clearDivImage();
  let img = document.createElement('img');
  img.src = 'imgs/meme3.png'
  img.width = '300';
  img.height = '300';
  let insertImg = document.getElementById('meme-image');
  insertImg.appendChild(img);
});

document.getElementById('meme-4').addEventListener('click', function() {
  clearDivImage();
  let img = document.createElement('img');
  img.src = 'imgs/meme4.png'
  img.width = '300';
  img.height = '300';
  let insertImg = document.getElementById('meme-image');
  insertImg.appendChild(img);
});