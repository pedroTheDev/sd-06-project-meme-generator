window.onload = function () {
  const textInput = document.querySelector('#text-input');
  const textContainer = document.querySelector('#meme-text');
  const imgInput = document.querySelector('#meme-insert');
  const imgContainer = document.querySelector('#meme-image');

  function addText() {
    textContainer.innerText = textInput.value;
  }

  function addImage(event) {
    imgContainer.src = URL.createObjectURL(event.target.files[0]);
  }
  textInput.addEventListener('input', addText);
  imgInput.addEventListener('change', addImage);
};
