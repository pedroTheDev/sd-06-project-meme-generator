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
    }
  });
}

// Suggested memes

function clickSuggestedMemes() {
  const meme1 = document.getElementById('meme-1');
  const meme2 = document.getElementById('meme-2');
  const meme3 = document.getElementById('meme-3');
  const meme4 = document.getElementById('meme-4');
  const mainMeme = document.getElementById('placeholder');
  const memeCollection = [meme1, meme2, meme3, meme4];

  memeCollection.forEach((img) => {
    img.addEventListener('click', (event) => {
      mainMeme.src = event.target.src;
      mainMeme.onload = () => {
        drawImg();
      }
    })
  });
}

// Input file

function receiveImg() {
  const uploadFile = document.getElementById('meme-insert');
  const mainMeme = document.getElementById('placeholder');

  uploadFile.addEventListener('change', (event) => {
    mainMeme.src = URL.createObjectURL(event.target.files[0]);
    //sem essa parte do onload não funciona!
    mainMeme.onload = () => {
      drawImg();
    }
  });
}

// Meme Text

function addText() {
  const inputText = document.getElementById('text-input');
  const extraText = document.getElementById('extra-input');

  extraText.addEventListener('input', (event) => {
    // const memeText = document.getElementById('meme-text');
    // memeText.innerHTML = event.target.value;
    drawImg(event.target.value, 'bottom')
  });

  inputText.addEventListener('input', (event) => {
    // const memeText = document.getElementById('meme-text');
    // memeText.innerHTML = event.target.value;
    drawImg(event.target.value, 'top')
  })
}

function makeItDownloadable(canvas) {
  const downloadLink = document.querySelector("#download");
  downloadLink.addEventListener('click', () => {
    downloadLink.href = canvas.toDataURL();
    downloadLink.download = 'meme.png';
  });
}

function handleText(canvas, ctx, text, pos) {
  switch (pos) {
    case 'top':
      if (text.length < 15) {
        ctx.fillText(text, canvas.width/2, 40);
      } else {
        const text1 = text.slice(0, 15);
        const text2 = text.slice(15, text.length);
        ctx.fillText(text1, canvas.width/2, 40);
        ctx.fillText(text2, canvas.width/2, 80);
      }
      break;
    default:
      if (text.length < 15) {
        ctx.fillText(text, canvas.width/2, canvas.height - 20);
      } else {
        const text1 = text.slice(0, 15);
        const text2 = text.slice(15, text.length);
        ctx.fillText(text1, canvas.width/2, canvas.height - 60);
        ctx.fillText(text2, canvas.width/2, canvas.height - 20);
      }
      break;
  }

}

function drawImg(text = "", pos) {
  const canvas = document.getElementById('meme-image');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const img = document.getElementById('placeholder');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.font = 'bold 50px Rowdies, cursive';
  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  text = text.toUpperCase();

  handleText(canvas, ctx, text, pos);

  makeItDownloadable(canvas);

}

window.onload = () => {
  drawImg();
  receiveImg();
  clickSuggestedMemes();
  addBorders();
  addText();
}