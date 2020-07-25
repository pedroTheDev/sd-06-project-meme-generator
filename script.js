const textInput = document.getElementById('text-input')
const memeText = document.getElementById('meme-text')
textInput.addEventListener('input', function(){
    memeText.innerText = textInput.value
})
const photoInput = document.getElementById('photo-input');
const memeImage =  document.getElementById('meme-image');
photoInput.addEventListener('change', function() {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.style.maxWidth = '100%';
})
