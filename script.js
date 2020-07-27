var capturando = "";

function capturar() {
    capturando = document.getElementById('text-input').value;
    document.getElementById('meme-text').innerHTML = capturando;
}

// function capturar() {
//     const textInput = document.getElementById('text-input');
//     const memeText = document.getElementById('meme-text');
//     textInput.addEventListener('keyup', () => {
//       memeText.innerText = textInput.value;
//     });
//   }