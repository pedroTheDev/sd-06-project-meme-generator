const imgShow = document.querySelector('#meme-image');
const txtInput = document.querySelector('#text-input');
const txtOutput = document.querySelector('#meme-text');
const imgContainer = document.querySelector('meme-image-container');
const imgData = document.querySelector('#memes')

function showImage(event) {
    const imgSrc = event.target.files[0];
    imgShow.src = URL.createObjectURL(imgSrc);
}

txtInput.addEventListener('keyup', function () {
    txtOutput.innerHTML = txtInput.value;
    if (txtOutput === 1) {
        showImage(event);
}
});

function apearImage (event) {
    imgShow.src = event.target.src;
}

function earth() {
      imgCont.className = "meme-container earth"
}
    
function fire() {
      imgCont.className = "meme-container fire"
}
    
function water() {
      imgCont.className = "meme-container water"
}  