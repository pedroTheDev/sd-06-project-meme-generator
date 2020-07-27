window.onload = function() {
    // função para inserir texto no meme
     let campotexto = document.querySelector('#text-input');
     console.log(campotexto);
   
    campotexto.addEventListener('change', function () {
        let conteudotexto = document.querySelector('#text-input').value;
        let tagP = document.createElement('p');
        tagP.innerHTML = conteudotexto
        document.querySelector('#meme-text').appendChild(tagP);
    });
    //função para inserir imagem
     inserirIMG = function(event) {
        let imagem = document.getElementById('imagem');
        imagem.src = URL.createObjectURL(event.target.files[0]);
        imagem.onload = function() {
          URL.revokeObjectURL(output.src);
    }
   
}

}