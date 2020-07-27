window.onload = () => {
  clickSuggestedMemes();
  addBorders();
  receiveImg();
  addText();
}



// Styling borders button

function addBorders() {
  let btnFire = document.getElementById('fire');
  let btnWater = document.getElementById('water');
  let btnEarth = document.getElementById('earth');
  let btnRemove = document.getElementById('remove');
  let btnCollection = [btnFire, btnWater, btnEarth, btnRemove];

  let imgContainer = document.getElementById('meme-image-container');

  for (let i of btnCollection) {
    i.onclick = () => {
      switch (i) {
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
    }
  }
}

// Suggested memes

function clickSuggestedMemes() {
  let meme1 = document.getElementById('meme-1');
  let meme2 = document.getElementById('meme-2');
  let meme3 = document.getElementById('meme-3');
  let meme4 = document.getElementById('meme-4');
  let mainMeme = document.getElementById('meme-image');
  let memeCollection = [meme1, meme2, meme3, meme4];

  for (let j of memeCollection) {
    j.addEventListener('click', event => {
      mainMeme.src = event.target.src;
    })
  }
}

// Input file

function receiveImg() {
  let uploadFile = document.getElementById('meme-insert');
  let mainMeme = document.getElementById('meme-image');

  uploadFile.addEventListener('change', event => {
    mainMeme.src = URL.createObjectURL(event.target.files[0])
  })
}


// Meme Text

function addText() {
  let inputText = document.getElementById('text-input');

  inputText.addEventListener('input', event => {
    let memeText = document.getElementById('meme-text')
    memeText.innerHTML = event.target.value;
  })
}

