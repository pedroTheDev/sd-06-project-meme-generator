
function getText() {
  const textInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  textInput.addEventListener('change', () => {
    memeText.innerText = textInput.value;
  });
}

window.onload = () => {
  console.log('carregou')
  getText();
};
