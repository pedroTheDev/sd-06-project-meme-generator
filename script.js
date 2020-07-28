window.onload = function () {
  // variables
  const txtToInput = document.querySelector('#text-input');
  const imgToInput = document.querySelector('#meme-insert');
  const memeTxtInImg = document.querySelector('#meme-text');
  const imgInContainer = document.querySelector('#meme-image');

  // functions
  // add txt to image in meme container
  function gettxtToInput() {
    memeTxtInImg.innerHTML = txtToInput.value;
  }
  // inserir imagem
  function getImgToInput() {
    imgInContainer.src = URL.createObjectURL(imgToInput.files[0]);
  }

  // events
  // hear typed text and transfer to image
  txtToInput.addEventListener('keyup', gettxtToInput);
  // transfer the chosen image to the meme container
  imgToInput.addEventListener('change', getImgToInput);
}
