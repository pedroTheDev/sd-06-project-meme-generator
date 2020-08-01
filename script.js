window.onload = function() {
  addTextElement();
  addImageElement();
  retrieveText();
  createFileEvent();
}

//TEXT ELEMENT
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
  textValue.addEventListener('keyup', function() {
  const memeText = document.querySelector('#meme-text')
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
  imageElement.className = 'meme-image'
  return imageElement;
}

function createFileEvent() {
  const imageValue = document.querySelector('#meme-insert');
  imageValue.addEventListener('change', handFileEvent)
}

function  handFileEvent(event) {
  const memeImage = document.querySelector('#meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function() {
  URL.revokeObjectURL(memeImage.src);
  }
}
