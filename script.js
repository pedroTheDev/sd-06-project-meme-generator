let image = document.querySelector('#img-receiver');
let imageSelector = document.querySelector('#meme-insert');
imageSelector.addEventListener('change', loadImg);

function loadImg(event) {
  image.src = URL.createObjectURL(imageSelector.files[0]);
  imageSelector.value = null;
};