window.onload = function () {
  addTextElement();
  addImageElement();
  retrieveText();
  createFileEvent();
};

// TEXT ELEMENT
function addTextElement() {
  const memeContainer = document.querySelector('#meme-image-container');
  const textElement = createTextElement();
  memeContainer.appendChild(textElement);
}

function createTextElement() {
  const textElement = document.createElement('div');
  textElement.id = 'meme-text';
  textElement.className = 'meme-text';
  return textElement;
}

function retrieveText() {
  const textValue = document.querySelector('#text-input');
  textValue.addEventListener('keyup', function () {
    const memeText = document.querySelector('#meme-text');
    memeText.innerText = textValue.value;
  });
}

// IMAGE ELEMENT
function addImageElement() {
  const memeContainer = document.querySelector('#meme-image-container');
  const imageElement = createImageElement();
  memeContainer.appendChild(imageElement);
}

function createImageElement() {
  const imageElement = document.createElement('img');
  imageElement.id = 'meme-image';
  imageElement.className = 'meme-image';
  return imageElement;
}

function createFileEvent() {
  const imageValue = document.querySelector('#meme-insert');
  imageValue.addEventListener('change', handFileEvent);
}

function handFileEvent(event) {
  const memeImage = document.querySelector('#meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
}

// BORDER STYLE
const buttonContainer = document.querySelectorAll('.border-button');
const memeContainer = document.querySelector('#meme-image-container');

const borders = {
  fire: '3px dashed red',
  water: '5px double blue',
  earth: '6px groove green',
};

buttonContainer[0].onclick = function () {
  memeContainer.style.border = borders.fire;
};

buttonContainer[1].onclick = function () {
  memeContainer.style.border = borders.water;
};

buttonContainer[2].onclick = function () {
  memeContainer.style.border = borders.earth;
};

// CHOSEN MEMES
const meme1 = document.querySelector('#meme-1');
meme1.addEventListener('click', function () {
  const replaceImage = document.querySelector('#meme-image');
  replaceImage.src = 'imgs/meme1.png';
});

const meme2 = document.querySelector('#meme-2');
meme2.addEventListener('click', function () {
  const replaceImage = document.querySelector('#meme-image');
  replaceImage.src = 'imgs/meme2.png';
});

const meme3 = document.querySelector('#meme-3');
meme3.addEventListener('click', function () {
  const replaceImage = document.querySelector('#meme-image');
  replaceImage.src = 'imgs/meme3.png';
});

const meme4 = document.querySelector('#meme-4');
meme4.addEventListener('click', function () {
  const replaceImage = document.querySelector('#meme-image');
  replaceImage.src = 'imgs/meme4.png';
});
