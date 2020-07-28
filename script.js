

// Show text in the container
function showText() {
  const show = document.querySelector('#text-input').value;
  document.querySelector('#meme-text').innerHTML = show;
  
}

// Show pics in the container
const outputPic = document.querySelector('#meme-image');

function showPic() {
  outputPic.src = URL.createObjectURL(event.target.files[0]);
  outputPic.onload = function () {
    URL.revokeObjectURL(outputPic.src);
  }
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
    memeBox.style.textSize = '5px';
  } else if (event.target === fire) {
    memeBox.style.borderColor = 'red';
    memeBox.style.borderStyle = 'dashed';
    memeBox.style.textSize = '3px';
  } else if (event.target === earth) {
    memeBox.style.borderColor = 'green';
    memeBox.style.borderStyle = 'groove';
    memeBox.style.textSize = '6px';
  }
});

//minipics

function firstPic () {
  const pic1 = document.getElementById('firstPic').src;
  outputPic.src = pic1;
  outputPic.style.width = '500px';
  outputPic.style.height = '400px';
};

function secondPic () {
  const pic2 = document.getElementById('secondPic').src;
  outputPic.src = pic2;
  outputPic.style.width = '500px';
  outputPic.style.height = '400px';
};

function thirdPic () {
  const pic3 = document.getElementById('thirdPic').src;
  outputPic.src = pic3;
  outputPic.style.width = '500px';
  outputPic.style.height = '400px';
};
function fourthPic () {
  const pic4 = document.getElementById('fourthPic').src;
  outputPic.src = pic4;
  outputPic.style.width = '500px';
  outputPic.style.height = '400px';
};
  
  