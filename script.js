const textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', function () {
  const text = document.querySelector('#meme-text');
  text.innerHTML = textInput.value;
});
const imageInput = document.querySelector('#meme-insert');
imageInput.addEventListener('change', function () {
  const image = document.querySelector('#meme-image');
  image.src = imageInput.files[0].name;
});
window.onclick = function () {
  const container = document.querySelector('#meme-image-container');
  if (event.target.id === 'fire') {
    container.style.border = 'dashed 3px red';
  }
  if (event.target.id === 'water') {
    container.style.border = 'double 5px blue';
  }
  if (event.target.id === 'earth') {
    container.style.border = 'groove 6px green';
  }
};
const imagens = document.querySelector('.imagens');
imagens.addEventListener('click', function () {
  for (let i = 1; i < 5; i += 1) {
    if (event.target.id === `meme-${i}`) {
      const image = document.querySelector('#meme-image');
      image.src = `./imgs/meme${i}.png`;
    }
  }
});
