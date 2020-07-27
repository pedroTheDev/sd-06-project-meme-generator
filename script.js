

function showText() {
  let show = document.querySelector('#text-input').value;
  document.querySelector('#meme-text').innerHTML = show;
}

var loadFile = function(event) {
    var pic = document.querySelector('#meme-insert');
    pic.src = url.createObjectURL(event.target.files[0]);
    pic.onload = function() {
        URL.revokeObjectURL(pic.src)
    }
};

//options

let options = document.querySelector('.options')
var water = document.querySelector('#water')
var fire = document.querySelector('#fire')
var earth = document.querySelector('#earth')
let memeBox = document.querySelector('#meme-image-container')

options.addEventListener('click', function(event) {
    if (event.target === water) {
        memeBox.style.borderColor = "blue"
        memeBox.style.borderStyle = "double"
    }else if (event.target === fire) {
        memeBox.style.borderColor = "red"
        memeBox.style.borderStyle = "double"
    }else if (event.target === earth) {
        memeBox.style.borderColor = "green"
        memeBox.style.borderStyle = "double"
    }
}); 