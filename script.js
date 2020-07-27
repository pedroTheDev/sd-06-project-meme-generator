function insertMemeText() {
  const insertTextField = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  insertTextField.addEventListener('change', () => {
    memeText.innerText = insertTextField.value;
  })
  
  // insertTextField.addEventListener('keypress', (key) => {
  //   if (key.keyCode === 32) {
  //     memeText += " ";
  //   } else {
  //     memeText.innerText += key.key
  //   }
  //   // memeText.innerText = insertTextField.value;
  //   // insertTextField.value = '';
    
  // });
}

function imageUploadURL() {
  const memeImageUpload = document.getElementById('meme-insert');
  memeImageUpload.addEventListener('change', () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById('meme-image').src = e.target.result;
    };
    reader.readAsDataURL(memeImageUpload.files[0]);
  });
}

window.onload = () => {
  insertMemeText();
  imageUploadURL();
};
