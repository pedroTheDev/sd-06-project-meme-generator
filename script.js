window.onload = () => {

  function addTxt (e) {
  textInput = document.querySelector('#text-input').value;
  textMeme = document.querySelector('#meme-text');
  textMeme.innerText = textInput;
  }

  function addImg (e) {
  document.querySelector('#meme-image').src = URL.createObjectURL(e.target.files[0]);
  }

  function changeBorderColor (e) {
    button = e.currentTarget;
    memeContainer = document.getElementById('meme-image-container');
    memeContainer.style.borderColor = getComputedStyle(button).backgroundColor;
  }

  const insertMeme = document.querySelector('#meme-insert');
  const insertText = document.querySelector('#text-input');
  const changeBorder = document.querySelector('.border').children;

  insertMeme.addEventListener('change', function (e) {
    addImg(e,insertMeme);
  });

  insertText.addEventListener('keyup', function (e) {
    addTxt(e);
  });

  for (let i = 0; i < changeBorder.length; i += 1)
  changeBorder[i].addEventListener('click', function (e) {
    changeBorderColor(e);
  });
}
