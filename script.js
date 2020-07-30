const textInput = document.querySelector('#text-input');
const textContainer = document.querySelector('#meme-text');
const imgInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const imgContainer = document.querySelector('#meme-image-container');

function addImage(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}

function handleImageUpload() {
  imgInput.addEventListener('change', addImage);
}

function addText() {
  textContainer.innerText = textInput.value;
}

function handleTextInput() {
  textInput.addEventListener('input', addText);
}

function clearButtonBackgroundColor() {
  const borderButtons = document.querySelectorAll('.border-button');
  for (let i = 0; i < borderButtons.length; i += 1) {
    if (borderButtons[i].id === 'fire') {
      borderButtons[i].style.backgroundColor = 'red';
    } else if (borderButtons[i].id === 'water') {
      borderButtons[i].style.backgroundColor = 'blue';
    } else {
      borderButtons[i].style.backgroundColor = 'green';
    }
  }
}

function changeBorder(event) {
  const selectedBorder = event.target;
  if (selectedBorder.id === 'fire') {
    imgContainer.style.border = '3px dashed red';
  } else if (selectedBorder.id === 'water') {
    imgContainer.style.border = '5px double blue';
  } else {
    imgContainer.style.border = '6px groove green';
  }
}

function handleBorderSelection() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('border-button')) {
      clearButtonBackgroundColor();
      changeBorder(event);
    }
  });
}

function chooseMeme(event) {
  memeImage.src = event.target.src;
}

function handleMemeSelection() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('meme-pic')) {
      chooseMeme(event);
    }
  });
}

window.onload = function () {
  handleImageUpload();
  handleTextInput();
  handleBorderSelection();
  handleMemeSelection();
};
