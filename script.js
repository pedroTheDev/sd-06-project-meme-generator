//Adicionando texto.
let text = document.getElementById('text-input');
let texto = document.createElement('h1');
texto.style.color ='white';
texto.style.textShadow = '5px 5px 5px black';
texto.style.fontSize = '30px';
texto.style.position = 'absolute';
document.getElementById('meme-text').appendChild(texto);

text.addEventListener('input',function(){
    texto.innerHTML = text.value;
});
//Adicionando imagem.

let btnImg = document.getElementById('meme-insert');
btnImg.addEventListener('input', function(event) {
    let photo = document.createElement('img');
    photo.classList.add('picture');
    document.getElementById('meme-image').appendChild(photo);
    
    photo.src = URL.createObjectURL(event.target.files[0]);
    photo.onload = function() {
        URL.revokeObjectURL(photo.src)
    }
    
});
