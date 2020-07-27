
function getText() {
  const textInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  textInput.addEventListener('input', () => {
    memeText.innerText = textInput.value;
  });
}

window.onload = () => {
  getText();
};
