const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');

textInput.addEventListener('change', function () {
    const aux = textInput.value;
    if(aux.length > 60) {
        alert('Limite do texto do meme de 60 caracteres!');
    } else {
        memeText.innerHTML = aux;
    }
})