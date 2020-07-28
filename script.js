window.onload = function () {
    let imgInput = document.querySelector('#meme-insert');

    let imgContainer = document.querySelector('#meme-image');

    imgInput.oninput = function() {
        imgContainer.src = URL.createObjectURL(imgInput.files[0]);
    }
}

let memeText = document.querySelector('#meme-text');
let textInput = document.querySelector('#text-input');
    textInput.addEventListener('input', function () {
    memeText.innerText = textInput.value;
});
