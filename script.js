function addImagem(event) {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}

function addText () {
  const text = document.getElementById('meme-text');
  const textAdd = document.getElementById('text-input');
  text.innerHtml = textAdd.value;
}

window.onload = function () {
  const textInput = document.getElementById('text-input');
  textInput.addEventListener('keyup', addText);

  const memeInsert = document.getElementById('meme-insert');
  memeInsert.addEventListener('change', addImagem);
}