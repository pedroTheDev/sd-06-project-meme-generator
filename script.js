const textInput = document.querySelector('#text-input');
const imgInput = document.querySelector('#meme-insert');
const memeText = document.querySelector('#meme-text');

textInput.onchange = () => {
  memeText.innerHTML = textInput.value;
};
