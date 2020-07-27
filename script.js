// document.getElementById('meme-text').innerHTML = document.getElementsByTagName('input')[0].value;

let uploadImg = document.getElementById('meme-insert');
uploadImg.addEventListener('change', function() {
  // console.log(event);
  let img = document.createElement('img');
  img.src = URL.createObjectURL(event.target.files[0]); // URL.createObjectURL(this.files[0]) tbm funciona
  img.width = '300';
  img.height = '300';
  let insertImg = document.getElementById('meme-image');
  insertImg.appendChild(img);
});