
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
  const earthButton = document.getElementById('earth');

  fireButton.addEventListener('click', () => {
    container.style.border = 'red dashed 3px'
  });
  waterButton.addEventListener('click', () => {
    container.style.border = 'blue double 5px'
  });
  earthButton.addEventListener('click', () => {
    container.style.border = 'green groove 6px'
  });
}

function memeFromPreview() {
  const meme = document.querySelector('#meme-image')
  const memePreview = document.querySelectorAll('.preview-images');
  for (let i = 0; i < memePreview.length; i += 1) {
    let image = memePreview[i];
    image.addEventListener('click', () => {
      meme.src = image.src;
    })
  }
}

window.onload = () => {
  getText();
  imageUploadURL();
  effectButtons();
  memeFromPreview();
};
