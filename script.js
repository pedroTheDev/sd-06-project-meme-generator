window.onload = function () {
// função para inserir texto no meme
  const campotexto = document.querySelector('#text-input');
  const tagP = document.createElement('p');
  campotexto.addEventListener('keyup', function () {
    const conteudotexto = document.querySelector('#text-input').value;
    tagP.innerHTML = conteudotexto;
    document.querySelector('#meme-text').appendChild(tagP);
  });
// função para inserir imagem
  inserirIMG = function (event) {
    const imagem = document.querySelector('#meme-image');
    imagem.src = URL.createObjectURL(event.target.files[0]);
    imagem.onload = function () {
      URL.revokeObjectURL(imagem.src);
    };
  };
};
