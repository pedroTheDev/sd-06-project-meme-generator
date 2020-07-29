window.onload = function () {
  //  Tomando imagen e colocando no container
  const memeImage = document.createElement('img');
  loadFile = function (event) {
    const reader = new FileReader();
    reader.onload = function () {
      const image = document.getElementById('meme-image').appendChild(memeImage);
      image.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  //  Colocando o texto inserido em no container
  const textoInput = document.querySelector('#text-input');
  textoInput.addEventListener('keyup', function () {
    const texto = document.querySelector('#meme-text');
    texto.innerHTML = textoInput.value;
  });
};
