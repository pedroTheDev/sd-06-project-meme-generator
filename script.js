window.onload = function() {
  function createMemeText(event) {
    document.getElementById('meme-text').innerText = event.target.value;
  }
  
  document.getElementById('text-input').addEventListener('change', createMemeText);  
}
