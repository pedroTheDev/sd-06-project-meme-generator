
function getText() {
  const textInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  textInput.addEventListener('input', () => {
    memeText.innerHTML = textInput.value;
  });
}

function imageUploadURL() {
  const memeImageUpload = document.getElementById('meme-insert');
  memeImageUpload.addEventListener('change', () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById('meme-image').src = e.target.result;
    };
    reader.readAsDataURL(memeImageUpload.files[0]);
  });
}

function effectButtons() {
  const container = document.getElementById('meme-image-container');
  const fireButton = document.getElementById('fire');
  const waterButton = document.getElementById('water');
  const eartButton = document.getElementById('eart');

  fireButton.addEventListener('click', () => {
    container.style.border = 'red dashed 3px'
  });
  waterButton.addEventListener('click', () => {
    container.style.border = 'blue double 5px'
  });
  eartButton.addEventListener('click', () => {
    container.style.border = 'green groove 6px'
  });
}

window.onload = () => {
  getText();
  imageUploadURL();
  effectButtons();
};
