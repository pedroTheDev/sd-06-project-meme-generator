
window.onload = function () {
// Show text in the container
    const inputTxt = document.querySelector('#text-input');
    const imgTxt = document.querySelector('#meme-text');

      inputTxt.addEventListener('input', function () {
      imgTxt.innerHTML = inputTxt.value;
    });

  // Show pics in the container
  function onLoadImg(){
    const img = document.getElementById('meme-image');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = function () {
        URL.revokeObjectURL(img.src);
    };
  }

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

  const mini1 = document.querySelector('.first_pic');
  const mini2 = document.querySelector('.second_pic');
  const mini3 = document.querySelector('.third_pic');
  const mini4 = document.querySelector('.fourth_pic');

  let picImg = document.querySelector('#meme-image');

  mini1.addEventListener('click', function () {
    picImg.style.backgroundImage = "url('./images/1.jpg')"
  });
  mini2.addEventListener('click', function () {
    picImg.style.backgroundImage = "url('./images/2.jpg')"
  });
  mini3.addEventListener('click', function () {
    picImg.style.backgroundImage = "url('./images/3.jpg')"
  });
  mini4.addEventListener('click', function () {
    picImg.style.backgroundImage = "url('./images/4.jpg')"
  });
}

