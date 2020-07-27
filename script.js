function textInput() {
  // Função que vai fazer o texto aparecer no meme
  let inputText = document.getElementById('text-input').value;
  let divMemeText = document.getElementById('meme-text');
  divMemeText.style.maxWidth = '500px';
  divMemeText.innerHTML = inputText;
}

function imageInput() {
  // Função que vai fazer a imagem aparecer no meme
  const outputImage = document.getElementById('meme-image');
  outputImage.src = URL.createObjectURL(event.target.files[0]);
  outputImage.onload = function () {
    URL.revokeObjectURL(outputImage.src);
  };
}

const divContainer = document.getElementById('meme-image-container');

function fireCustom() {
  divContainer.style.border = '3px dashed red';
}

function waterCustom() {
  divContainer.style.border = '5px double blue';
}

function earthCustom() {
  divContainer.style.border = '6px groove green';
}
