window.onload = function () {
    let memeText = document.querySelector('#meme-text');
    let textInput = document.querySelector('#text-input');
        textInput.addEventListener('input', function () {
        memeText.innerHTML = textInput.value;
    }

    const imgContainer = document.querySelector('#meme-image-container');
    let memeImage = document.querySelector('#meme-image');