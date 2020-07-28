
window.onload = function () {
  // Referencing elements
  let inputTextElement = document.querySelector('#text-input');
  const memeTextBox = document.querySelector('#meme-text');
  const inputImageElement = document.querySelector('#meme-insert');
  const memeImage = document.querySelector('#meme-image');
  const buttons = document.querySelectorAll('button');
  const container = document.querySelector('#meme-image-container');
  const preSetImages = document.querySelectorAll('#thumbnails img');

  // Functions
  let functionalities = {
    addText: (event) => memeTextBox.innerHTML = inputTextElement.value,
    uploadImage: (event) => memeImage.src = window.URL.createObjectURL(inputImageElement.files[0]),
    changeStyle: {
      fire: (event) => container.style.border = 'dashed rgb(255 , 0 , 0) 3px',
      water: (event) => container.style.border = 'double rgb(0 , 0 , 255) 5px',
      earth: (event) => container.style.border = 'groove rgb(0 , 128 , 0) 6px',
    },
    uploadPreSetImage: (event) => memeImage.src = event.target.src,
  }

  // Events
  inputTextElement.addEventListener('keyup', functionalities['addText']);
  inputImageElement.addEventListener('change', functionalities['uploadImage']);
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', functionalities.changeStyle[buttons[i].id]);
  }
  for (let i=0; i < preSetImages.length; i += 1) {
    preSetImages[i].addEventListener('click', functionalities['uploadPreSetImage']);
  }
}
