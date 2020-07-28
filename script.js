//Adicionando texto.
let text = document.getElementById('text-input');

text.addEventListener('input',function(){
    let note = document.getElementById('meme-text');
    note.innerHTML = text.value;
    note.style.color = 'white';
    note.style.fontSize = '30px';
    note.style.textShadow = '5px 5px 5px black';
    note.style.position = 'absolute';
    note.style.marginTop = '-40px';
});
//Adicionando imagem.

let btnImg = document.getElementById('meme-insert');
btnImg.addEventListener('input', function(event) {
    let photo = document.createElement('img');
    
    document.getElementById('meme-image').appendChild(photo);
    
    photo.src = URL.createObjectURL(event.target.files[0]);
    photo.onload = function() {
        URL.revokeObjectURL(photo.src)
    }
    
});
