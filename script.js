window.onload = function () {
  let memeText = document.querySelector('#meme-text');
  let textInput = document.querySelector('#text-input');

  textInput.addEventListener('input', function () {
    memeText.innerText = textInput.value;
  });

  const submitButton = document.querySelector('.submit');
  const imageInput = document.querySelector('#meme-insert')

  submitButton.addEventListener('click', function () {
    let output = document.querySelector('#meme-image')
    output.src = URL.createObjectURL(imageInput.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src)
    }
  });

  const fireButton = document.querySelector('#fire');
  const imgContainer = document.querySelector('#meme-image-container');

  fireButton.addEventListener('click', function () {
    imgContainer.style.border = '3px dashed red';
  });

  const waterButton = document.querySelector('#water');

  waterButton.addEventListener('click', function () {
    imgContainer.style.border = '5px blue double';
  });

  const earthButton = document.querySelector('#earth');

  earthButton.addEventListener('click', function () {
    imgContainer.style.border = '6px green groove';
  });

  const picMeme1 = document.querySelector('#meme-1');
  const picMeme2 = document.querySelector('#meme-2');
  const picMeme3 = document.querySelector('#meme-3')
  const picMeme4 = document.querySelector('#meme-4')

  let memeImage = document.querySelector('#meme-image');

  picMeme1.addEventListener('click', function () {
    memeImage.src = 'imgs/meme1.png'
  });

  picMeme2.addEventListener('click', function () {
    memeImage.src = 'imgs/meme2.png'
  });

  picMeme3.addEventListener('click', function () {
    memeImage.src = 'imgs/meme3.png'
  });

  picMeme4.addEventListener('click', function () {
    memeImage.src = 'imgs/meme4.png'
  });
};
