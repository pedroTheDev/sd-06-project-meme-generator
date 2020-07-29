window.onload = function () {
  function createMemeText(event) {
    document.getElementById('meme-text').innerText = event.target.value;
  }
  function memeInsert(event) {
    var output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src)
    }
  }

  function borderInsert(event) {
    document.getElementById('meme-image-container').classList.remove('fire', 'earth', 'water');
    document.getElementById('meme-image-container').classList.add(event.target.id);
  }
  
  document.getElementById('text-input').addEventListener('input', createMemeText);
  document.getElementById('meme-insert').addEventListener('change', memeInsert);
  document.getElementById('fire').addEventListener('click', borderInsert);
  document.getElementById('water').addEventListener('click', borderInsert);
  document.getElementById('earth').addEventListener('click', borderInsert);
};
