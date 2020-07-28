var capturando = "";

function capturar() {
    capturando = document.getElementById('text-input').value;
    document.getElementById('meme-text').innerHTML = capturando;
}

let file = document.querySelector('#meme-insert');
let img = document.querySelector('#meme-image');
file.addEventListener('change', function(event) {
    img.src = URL.createObjectURL(event.target.files[0]);
})


// function capturar() {
//     const textInput = document.getElementById('text-input');
//     const memeText = document.getElementById('meme-text');
//     textInput.addEventListener('keyup', () => {
//       memeText.innerText = textInput.value;
//     });
//   }    