let inputTexto = document.querySelector('#text-input');
let outputTexto = document.querySelector('#meme-text');

inputTexto.addEventListener('input', (e) => {
    outputTexto.innerHTML = e.target.value;
});

let inputImagem = document.querySelector('#meme-insert');
let outputImagem = document.querySelector('#meme-image');

inputImagem.addEventListener('change', (e) => {
    outputImagem.src = URL.createObjectURL(e.target.files[0]);
});


