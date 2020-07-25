
  const textBox = document.querySelector('#text-input');
  const memeContainer = document.querySelector('#meme-text');
  const fileChooser = document.getElementById('meme-insert'); // Imagem escolhida
  const imagePreview = document.getElementById('meme-image'); // preview da imagem

  function trocaTexto() {
    memeContainer.innerHTML = textBox.value;
  }
  textBox.addEventListener('keyup', trocaTexto);
  
  function readImage() {
    imagePreview.src = window.URL.createObjectURL(fileChooser.files[0]);
  }
  fileChooser.addEventListener('change', readImage);
