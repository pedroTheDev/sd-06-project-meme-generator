const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');

textInput.addEventListener('change', function () {
    const aux = textInput.value;
    if(aux.length > 55) {
        alert('Limite do texto do meme de 60 caracteres!');
    } else {
        memeText.innerHTML = aux;
    }
})

memeInsert.addEventListener('change', function (event) {
    const imgAux = event.target.files[0];
    memeImg.src = URL.createObjectURL(imgAux);
});