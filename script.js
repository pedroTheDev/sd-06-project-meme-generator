const imgShow = document.querySelector('#meme-image');
const txtInput = document.querySelector('#text-input');
const txtOutput = document.querySelector('#meme-text');

function showImage(event) {
  const imgSrc = event.target.files[0];
  imgShow.src = URL.createObjectURL(imgSrc);
}

txtInput.addEventListener('keyup', function () {
  txtOutput.innerHTML = txtInput.value;
});
