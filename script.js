const inputTexto = document.querySelector('#text-input');
const outputTexto = document.querySelector('#meme-text');
const inputImg = document.querySelector('input[id="meme-insert"]')

inputTexto.addEventListener('input', function() {
outputTexto.innerHTML = inputTexto.value;
});

inputImg.addEventListener('change', function (e) {
const reader = new FileReader()
reader.onload = function () {
const img = new Image()
img.src = reader.result
document.body.appendChild(img)
}
reader.readAsDataURL(inputImg.files[0])
}, false) 
