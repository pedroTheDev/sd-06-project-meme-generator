window.onload = function () {
  // variables
  const txtToInput = document.querySelector('#text-input');
  const imgToInput = document.querySelector('#meme-input');
  const memeTxtInImg = document.querySelector('#meme-text');
  const imgInContainer = document.querySelector('#meme-img');

  // events
  // hear typed text and transfer to image
  txtToInput.addEventListener('keyup', gettxtToInput);
  // transfer the chosen image to the meme container
  imgToInput.addEventListener('change', getImgToInput);

  // functions
  // add txt to image in meme container
  function gettxtToInput() {
    memeTxtInImg.innerHTML = txtToInput.value;
  }
  // inserir imagem
  function getImgToInput() {
    imgInContainer.src = URL.createObjectURL(imgToInput.files[0]);
  }

}











// window.onload = function() {

//   let textInput = document.querySelector('#text-input');
//   let memeText = document.querySelector('#meme-text');
//   let imgInput = document.querySelector('.imageAddButton');
//   let memeImg = document.querySelector('.meme-img');

//   textInput.addEventListener('keyup', memeHearText);
//   function memeHearText() {
//     memeText.innerText = textInput.value;
//   }

//   imgInput.addEventListener('change', changeImg);
//   function changeImg() {
//     memeImg.src = window.URL.createObjectURL(this.files[0])

//   }
//   // imgInput.addEventListener('change', function() {
//   //   memeImg.src = imgInput.files[0].name;
//   // })
// }