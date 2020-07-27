const textInput = document.querySelector('#text-input');
const imgInput = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');

textInput.onchange = () => {
  memeText.textContent = textInput.value;
};

imgInput.onchange = (event) => {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
};
