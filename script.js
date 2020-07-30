
// Styling borders button

function addBorders() {
  const btnFire = document.getElementById('fire');
  const btnWater = document.getElementById('water');
  const btnEarth = document.getElementById('earth');
  const btnRemove = document.getElementById('remove');
  const btnCollection = [btnFire, btnWater, btnEarth, btnRemove];

  const imgContainer = document.getElementById('meme-image-container');

  btnCollection.forEach((btn) => {
    btn.onclick = () => {
      switch (btn) {
        case btnFire:
          imgContainer.style.border = '3px dashed red';
          break;
        case btnWater:
          imgContainer.style.border = '5px double blue';
          break;
        case btnEarth:
          imgContainer.style.border = '6px groove green';
          break;
        default:
          imgContainer.style.border = '1px solid black';
          break;
      }
    };
  });
}

// Suggested memes

function clickSuggestedMemes() {
  const meme1 = document.getElementById('meme-1');
  const meme2 = document.getElementById('meme-2');
  const meme3 = document.getElementById('meme-3');
  const meme4 = document.getElementById('meme-4');
  const mainMeme = document.getElementById('meme-image');
  const memeCollection = [meme1, meme2, meme3, meme4];

  memeCollection.forEach((img) => {
    img.addEventListener('click', (event) => {
      mainMeme.src = event.target.src;
    });
  });
}

// Input file

function receiveImg() {
  const uploadFile = document.getElementById('meme-insert');
  const mainMeme = document.getElementById('meme-image');

  uploadFile.addEventListener('change', (event) => {
    mainMeme.src = URL.createObjectURL(event.target.files[0]);
  });
}

// Meme Text

function addText() {
  const inputText = document.getElementById('text-input');

  inputText.addEventListener('input', (event) => {
    const memeText = document.getElementById('meme-text');
    memeText.innerHTML = event.target.value;
  });
}

window.onload = () => {
  clickSuggestedMemes();
  addBorders();
  receiveImg();
  addText();
};
