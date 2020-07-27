window.onload = () => {
  console.log('carregou')
  insertMemeText();
  imageUploadURL();
}

function insertMemeText() {
  const insertTextField = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  insertTextField.addEventListener('keypress', (key) => {
    if (key.key === 'Enter') {
      memeText.innerText = insertTextField.value;
      insertTextField.value = '';
    }
  })
}

function imageUploadURL() {
  let reader = new FileReader();
  const memeImageUpload = document.getElementById('meme-insert');
  memeImageUpload.addEventListener('change', () => {
    //console.log(memeImageUpload.files[0])
    var reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById('meme-image').src = e.target.result;
    };
    reader.readAsDataURL(memeImageUpload.files[0])

  })
}

