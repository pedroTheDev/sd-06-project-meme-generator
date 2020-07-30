
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

  // Itens bônus
  const principal = document.getElementById('meme-image-container');
  const fire = document.getElementById('fire');
  const water = document.getElementById('water');
  const earth = document.getElementById('earth');
  function selectBorders() {
    if (event.target === fire) {
      principal.style.borderColor = 'red';
      principal.style.borderWidth = '3px';
      principal.style.borderStyle = 'dashed';
    }
    if (event.target === water) {
      principal.style.borderColor = 'blue';
      principal.style.borderWidth = '5px';
      principal.style.borderStyle = 'double';
    }
    if (event.target === earth) {
      principal.style.borderColor = 'green';
      principal.style.borderWidth = '6px';
      principal.style.borderStyle = 'groove';
    }
  }
  fire.addEventListener('click', selectBorders);
  water.addEventListener('click', selectBorders);
  earth.addEventListener('click', selectBorders);
