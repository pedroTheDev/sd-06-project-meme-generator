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
  
  document.querySelector('#fire').addEventListener('click', fire);
  document.querySelector('#water').addEventListener('click', water);
  document.querySelector('#earth').addEventListener('click', earth);

};

function fire () {
  const moldura = document.querySelector('#meme-image-container');
  moldura.style.border = '3px dashed red';
}

function water () {
  const moldura = document.querySelector('#meme-image-container');
  moldura.style.border = '5px double blue';
}

function earth () {
  const moldura = document.querySelector('#meme-image-container');
  moldura.style.border = '6px groove green';
}