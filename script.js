//Adicionando texto.
let text = document.getElementById('text-input');

text.addEventListener('input',function(){
    let note = document.getElementById('meme-text');
    note.innerHTML = text.value;
   
});
//Adicionando imagem.
let box = document.getElementById('meme-image-container');
box.style.maxWidth = '100%';
let btnImg = document.getElementById('meme-insert');
btnImg.addEventListener('input', function(event) {
    
    
   let photo = document.getElementById('meme-image');
   photo.style.maxWidth = 'inherit';
    
    photo.src = URL.createObjectURL(event.target.files[0]);
    photo.onload = function() {
        URL.revokeObjectURL(photo.src)
    }
    
});
