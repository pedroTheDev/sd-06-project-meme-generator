

function showText() {
  const show = document.querySelector('#text-input').value;
  document.querySelector('#meme-text').innerHTML = show;
}

let loadFile = function(event) {
  let pic = document.querySelector('#meme-insert');
  pic.src = url.createObjectURL(event.target.files[0]);
  pic.onload = function() {
    URL.revokeObjectURL(pic.src);
  };
};

// options

const options = document.querySelector('.options');
const water = document.querySelector('#water');
const fire = document.querySelector('#fire');
const earth = document.querySelector('#earth');
const memeBox = document.querySelector('#meme-image-container');

options.addEventListener('click', function(event) {
  if (event.target === water) {
    memeBox.style.borderColor = 'blue';
    memeBox.style.borderStyle = 'double';
  } else if (event.target === fire) {
    memeBox.style.borderColor = 'red';
    memeBox.style.borderStyle = 'double';
  } else if (event.target === earth) {
    memeBox.style.borderColor = 'green';
    memeBox.style.borderStyle = 'double';
  }
});
