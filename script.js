// Funcções dos botões para alterar borda

let btnAzul = document.getElementById('botaoAzul');
    btnAzul.addEventListener('click',function() {
    let estilo = document.getElementById('meme-image-container');
    estilo.style.border = '3px dotted blue';
});

let btnVermelho = document.getElementById('botaoVermelho');
    btnVermelho.addEventListener('click',function() {
    let estilo = document.getElementById('meme-image-container');
    estilo.style.border = '3px double red';
});

let btnVerde = document.getElementById('botaoVerde');
    btnVerde.addEventListener('click',function() {
    let estilo = document.getElementById('meme-image-container');
    estilo.style.border = '3px solid green';
});

// funções para clicar na imagem sugerida
