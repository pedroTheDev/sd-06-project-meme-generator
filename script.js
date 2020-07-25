let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');

textInput.addEventListener('change', function (event) {
  memeText.innerText = event.target.value
})
