
window.onload = function () {
  // Referencing elements
  const inputTextElement = document.querySelector('#text-input');
  const memeTextBox = document.querySelector('#meme-text');
  const inputImageElement = document.querySelector('#meme-insert');
  const memeImg = document.querySelector('#meme-image');
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
    setImg: (e) => (memeImg.src = (e.target.id === 'meme-insert') ? window.URL.createObjectURL(e.target.files[0]) : e.target.src),
    changeStyle: (event) => (container.style.border = availableStyles[event.target.id]),
  };

  // Events
  inputTextElement.addEventListener('keyup', functionalities.addText);
  inputImageElement.addEventListener('change', functionalities.setImg);
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', functionalities.changeStyle);
  }
  for (let i = 0; i < preSetImages.length; i += 1) {
    preSetImages[i].addEventListener('click', functionalities.setImg);
  }
};
