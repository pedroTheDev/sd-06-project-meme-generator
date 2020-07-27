window.onload = function() {
  //Tomando imagen e colocando no container
  let imagem = document.querySelector('#meme-insert');
  let imagemInserida = document.createElement('img');
  imagem.addEventListener('input', function() {
    imagemInserida.src = "./img/" + imagem.files[0].name;
    
    document.querySelector('#meme-image').appendChild(imagemInserida)
  })
}