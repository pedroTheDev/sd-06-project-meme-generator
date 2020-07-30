window.onload = function () {
  handleImageUpload();
  handleTextInput();
  handleBorderSelection();
};

const textInput = document.querySelector('#text-input');
const textContainer = document.querySelector('#meme-text');
const imgInput = document.querySelector('#meme-insert');
const imgContainer = document.querySelector('#meme-image');

function addImage(event) {
  imgContainer.src = URL.createObjectURL(event.target.files[0]);
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
    selectedBorder.style.backgroundColor = 'rgb(150 , 0 , 0';
  } else if (selectedBorder.id === 'water') {
    imgContainer.style.border = '5px double blue';
    selectedBorder.style.backgroundColor = 'rgb(0 , 0 , 150';
  } else {
    imgContainer.style.border = '6px groove green';
    selectedBorder.style.backgroundColor = 'rgb(0 , 75 , 0';
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
