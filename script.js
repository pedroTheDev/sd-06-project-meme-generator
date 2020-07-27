//Adicionando texto.
let text = document.getElementById('text-input');

text.addEventListener('input',function(){
    let parah = document.getElementById('meme-text');
    parah.innerHTML = text.value;
    parah.style.position = 'absolute';
    parah.style.top = '40%';
    
});
//Adicionando imagem.
let container = document.getElementById('meme-image-container');
container.style.border = '1px solid black';
container.style.backgroundColor = 'white';

let btnImg = document.getElementById('meme-insert');
btnImg.addEventListener('input', function(event) {
    let img = document.getElementById('meme-image');
    

    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = function() {
        URL.revokeObjectURL(img.src)
    }
    img.style.maxWidth = '30%';
    console.log()
});
