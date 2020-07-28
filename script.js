const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');

textInput.addEventListener('change', function () {
    memeText.innerHTML = textInput.value;
})

memeInsert.addEventListener('change', function (event) {
    const imgAux = event.target.files[0];
    memeImg.src = URL.createObjectURL(imgAux);
});