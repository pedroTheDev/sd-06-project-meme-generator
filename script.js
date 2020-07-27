window.onload = function() {
  function createMemeText(event) {
    document.getElementById('meme-text').innerText = event.target.value;
  }
  function memeInsert(event) {
    var output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  }
  
  document.getElementById('text-input').addEventListener('change', createMemeText);
  document.getElementById('meme-insert').addEventListener('change', memeInsert);
};
