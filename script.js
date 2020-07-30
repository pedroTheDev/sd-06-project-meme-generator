window.onload = function () {
  handleImageUpload();
  handleTextInput();
  handleBorderSelection()
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

function changeBorder(event) {
  const selectedBorder = event.target;
  if (selectedBorder.id ==='fire-button') {
    imgContainer.style.border = '3px dashed red';
  } else if (selectedBorder.id ==='water-button') {
    imgContainer.style.border = '5px double blue';
  } else {
    imgContainer.style.border = '6px groove green';
  }
}

function handleBorderSelection() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('border-button')) {
      changeBorder(event);
    }
  })
}
