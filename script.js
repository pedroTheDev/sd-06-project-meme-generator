const txtInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const imageShow = document.querySelector('#meme-image');

function showImg(event) {
  const srcImg = event.target.files[0];
  imageShow.src = URL.createObjectURL(srcImg);
}

txtInput.addEventListener('keyup', function () {
  memeText.innerHTML = txtInput.value;
  if (memeText === 1) {
    showImg(event);
  }
});


