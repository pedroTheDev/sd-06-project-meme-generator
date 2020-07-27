window.onload = function () {
  const textInput = document.querySelector('#text-input');
  const textContainer = document.querySelector('#meme-text');
  const imgInput = document.querySelector('#meme-insert');
  const imgContainer = document.querySelector('#meme-image');

  function addText() {
    if (textInput.value.length <= 60) {
      textContainer.innerText = textInput.value;
    } else {
      alert('You exceeded the maximum of 60 characters ');
    }
  }

  function addImage(event) {
    imgContainer.src = URL.createObjectURL(event.target.files[0]);
  }
  textInput.addEventListener('input', addText);
  imgInput.addEventListener('change', addImage);
};
