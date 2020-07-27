//Adicionando texto.
let text = document.getElementById('text-input');
let texto = document.createElement('h1');
document.getElementById('meme-text').appendChild(texto);

text.addEventListener('input',function(){
    
    
   
    texto.innerHTML = text.value;
    texto.style.position = 'absolute';
    texto.style.boxShadow = 'black 5px 5px 5px';
    texto.style.fontSize = '30px';
    texto.style.color = 'white';
    
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
