window.onload = () => {}

  function textInput() {
  // Função que vai fazer o texto aparecer no meme
  const inputText = document.getElementById('text-input').value;
  const divMemeText = document.getElementById('meme-text');
  divMemeText.style.maxWidth = '500px';
  divMemeText.innerHTML = inputText;
  }

  const outputImage = document.getElementById('meme-image');

  function imageInput() {
  // Função que vai fazer a imagem aparecer no meme
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

  // Cria a variavel que pega o src da imagem
  // Insere a url da imagem na div meme-container

  function firstMeme() {
  const memeImage1 = document.getElementById('meme-1').src;
  outputImage.src = memeImage1;
  outputImage.style.width = '500px';
  outputImage.style.height = '400px';
  }

  function secondMeme() {
  const memeImage2 = document.getElementById('meme-2').src;
  outputImage.src = memeImage2;
  outputImage.style.width = '500px';
  outputImage.style.height = '400px';
  }

  function thirdMeme() {
  const memeImage3 = document.getElementById('meme-3').src;
  outputImage.src = memeImage3;
  outputImage.style.width = '500px';
  outputImage.style.height = '400px';
  }

  function fourthMeme() {
  const memeImage4 = document.getElementById('meme-4').src;
  outputImage.src = memeImage4;
  outputImage.style.width = '500px';
  outputImage.style.height = '400px';
  }
