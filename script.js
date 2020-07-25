const textInput = document.getElementById('text-input')
const memeText = document.getElementById('meme-text')
textInput.addEventListener('input', function(){
    memeText.innerText = textInput.value
})
const photoInsert = document.getElementById('meme-insert');
const memeImage =  document.getElementById('meme-image');
photoInsert.addEventListener('change', function() {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.style.maxWidth = '100%';
})
