let textInput = document.getElementById('text-input');
let inserText = document.getElementById('meme-text');

let returnText = textInput.addEventListener('input', function(e) {
    inserText.innerText = e.target.value
});

//

let imageInput = document.querySelector('#meme-insert');
let image = document.querySelector('#meme-image');

imageInput.addEventListener('change', function(e) {
    image.src = URL.createObjectURL(e.target.files[0]);
});
