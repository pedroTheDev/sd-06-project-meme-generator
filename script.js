
window.onload = function () {
  // Referencing elements
  const inputTextElement = document.querySelector('#text-input');
  const memeTextBox = document.querySelector('#meme-text');
  const inputImageElement = document.querySelector('#meme-insert');
  const memeImage = document.querySelector('#meme-image');
  const buttons = document.querySelectorAll('button');
  const container = document.querySelector('#meme-image-container');
  const preSetImages = document.querySelectorAll('#thumbnails img');
  const availableStyles = {
      fire: 'dashed rgb(255 , 0 , 0) 3px',
      water: 'double rgb(0 , 0 , 255) 5px',
      earth: 'groove rgb(0 , 128 , 0) 6px',
  };

  // Functions
  const functionalities = {
    addText: (event) => (memeTextBox.innerHTML = event.target.value),
    uploadImage: (event) => (memeImage.src = window.URL.createObjectURL(event.target.files[0])),
    changeStyle: (event) => (container.style.border = availableStyles[event.target.id]),
    uploadPreSetImage: (event) => (memeImage.src = event.target.src),
  };

  // Events
  inputTextElement.addEventListener('keyup', functionalities.addText);
  inputImageElement.addEventListener('change', functionalities.uploadImage);
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', functionalities.changeStyle);
  };
  for (let i = 0; i < preSetImages.length; i += 1) {
    preSetImages[i].addEventListener('click', functionalities.uploadPreSetImage);
  };
};
