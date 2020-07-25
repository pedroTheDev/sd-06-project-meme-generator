let textInput = document.getElementById('text-input');
let inserText = document.getElementById('meme-text');

let returnText = textInput.addEventListener('input', function(e) {
    inserText.innerText = e.target.value
});

