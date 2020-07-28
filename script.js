
const imgUp = document.querySelector('#meme-insert');
const imgShow = document.querySelector('#meme-image');
const txtInput = document.querySelector('#text-input');
const txtOutput = document.querySelector('#meme-text')

function showImage(event) {
    let imgSrc = event.target.files[0];
    console.log(imgSrc);
    imgShow.src = URL.createObjectURL(imgSrc);
}

txtInput.addEventListener('keyup', function () {
    txtOutput.innerHTML = txtInput.value;
})