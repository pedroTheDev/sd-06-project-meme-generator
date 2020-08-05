window.onload = function() {

  // insere o texto no container conforme é digitado
  let textInput = document.querySelector('#text-input');
  textInput.addEventListener('input', function () {
    document.querySelector('#meme-text').innerHTML = textInput.value;
  })

  // recebe o arquivo de imagem e insere na div meme-image
  document.getElementById('meme-insert').addEventListener('change', insertImage);
  
};

function insertImage () {
  console.log('vô inserir a imagem :v')
  let imageMeme = document.querySelector('#meme-image');
  imageMeme.src = URL.createObjectURL(event.target.files[0]);
}

 

