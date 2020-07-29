function selectMemeImage(event) {
  document.getElementById('meme-image').src = event.target.src;
  document.getElementById('text-input').value = '';
}

function createMemeText(event) {
  document.getElementById('meme-text').innerText = event.target.value;
}

function memeInsert(event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
  document.getElementById('text-input').value = '';
}

function borderInsert(event) {
  document.getElementById('meme-image-container').classList.remove('fire', 'earth', 'water');
  document.getElementById('meme-image-container').classList.add(event.target.id);
}

window.onload = function () {
  document.getElementById('text-input').addEventListener('input', createMemeText);
  document.getElementById('meme-insert').addEventListener('change', memeInsert);
  document.getElementById('fire').addEventListener('click', borderInsert);
  document.getElementById('water').addEventListener('click', borderInsert);
  document.getElementById('earth').addEventListener('click', borderInsert);
  document.getElementById('meme-galery').addEventListener('click', selectMemeImage);
};
