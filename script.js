
function loadImage() {
    let reader = new FileReader();
    reader.onload = function () {
        let saida = document.getElementById('meme-image');
        saida.src = reader.result;
    }
    if (reader) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

function loadText() {
    let inputText = document.querySelector('#text-input').value;
    let pText = document.querySelector('#meme-text');
    pText.innerHTML = inputText;
}