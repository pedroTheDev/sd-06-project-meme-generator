const textInput = document.querySelector('#text-input');
const imgInput = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');
const imgContainer = document.querySelector('.img-container');
const memesContainer = document.querySelector('.default-memes-container');
const borderButtons = document.querySelectorAll('.border-button');

const borders = {
  fire: '3px dashed red',
  water: '5px double blue',
  earth: '6px groove green',
};

textInput.oninput = () => {
  memeText.textContent = textInput.value;
};

imgInput.oninput = (event) => {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
};

borderButtons[0].onclick = () => {
  imgContainer.style.border = borders.fire;
};

borderButtons[1].onclick = () => {
  imgContainer.style.border = borders.water;
};

borderButtons[2].onclick = () => {
  imgContainer.style.border = borders.earth;
};

memesContainer.onclick = (event) => {
  memeImg.src = event.target.src;
};
