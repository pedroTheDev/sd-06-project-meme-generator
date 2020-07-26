let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');
let fileInput = document.getElementById('meme-insert');
let image = document.getElementById('meme-image');

textInput.addEventListener('input', function (event) {
  memeText.innerText = event.target.value;
})

fileInput.addEventListener('mouseout', function (event) {
  image.src = URL.createObjectURL(event.target.files[0]);
})

