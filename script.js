window.onload = function() {
    // função para inserir texto no meme
     let campotexto = document.querySelector('#text-input');
     console.log(campotexto);
     let tagP = document.createElement('div');
    campotexto.addEventListener('keyup', function () {
        let conteudotexto = document.querySelector('#text-input').value;
        tagP.innerHTML = conteudotexto
        document.querySelector('#meme-text').appendChild(tagP);
    });
    //função para inserir imagem
     inserirIMG = function(event) {
        let imagem = document.getElementById('imagem');
        imagem.src = URL.createObjectURL(event.target.files[0]);
        imagem.onload = function() {
          URL.revokeObjectURL(imagem.src);
    }
   
}

}