window.onload = function () {
  let temImagem = false;
  //  Tomando imagen e colocando no container.
  const memeImage = document.querySelector('img');
  loadFile = function (event) {
    removerAntigua();
    const reader = new FileReader();
    reader.onload = function () {
      const image = document.getElementById('meme-image-container').appendChild(memeImage);
      temImagem = true;
      image.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  //  Colocando o texto inserido no container.
  const textoInput = document.querySelector('#text-input');
  textoInput.addEventListener('keyup', function () {
    const texto = document.querySelector('#meme-text');
    texto.innerHTML = textoInput.value;
  });
  // funcionalidad de agregar borda a la foto com os 
  //respectivos botones.
  const bordas = document.querySelector('#bordas'); 
  bordas.addEventListener('click', function (event) {
    const bordaSelecionada = event.target;
    const propBorda = window.getComputedStyle(bordaSelecionada, null).getPropertyValue("border");
    document.querySelector('#meme-image-container').style.border = propBorda;
  });
  //  Imagens preselecionadas em miniuatura
  const imagenMiniatura = document.querySelector('#img-miniatura');
  imagenMiniatura.addEventListener('click', function (event) {
    removerAntigua();
    memeImage.src = event.target.src;
    document.getElementById('meme-image-container').appendChild(memeImage);
    temImagem = true;
  });
  //  funcao remover foto antigua
  function removerAntigua() {
    if (temImagem === true) {
      memeImage.remove.src;
    }
  }
};
