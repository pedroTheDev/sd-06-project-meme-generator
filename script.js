function insertMemeText() {
  const insertTextField = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  insertTextField.addEventListener('keypress', (key) => {
    if (key.key === 'Enter') {
      memeText.innerText = insertTextField.value;
      insertTextField.value = '';
    }
  });
}

function imageUploadURL() {
  const memeImageUpload = document.getElementById('meme-insert');
  memeImageUpload.addEventListener('change', () => {
    let reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById('meme-image').src = e.target.result;
    };
    reader.readAsDataURL(memeImageUpload.files[0]);
  });
}

window.onload = () => {
  insertMemeText();
  imageUploadURL();
}