const textInput = document.querySelector('#text-input');
const imgInput = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');

textInput.oninput = () => {
  memeText.textContent = textInput.value;
};

imgInput.oninput = (event) => {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
};
