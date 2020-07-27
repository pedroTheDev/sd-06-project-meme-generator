var capturando = "";
var img;
function capturar() {
    capturando = document.getElementById('text-input').value;
    document.getElementById('meme-text').innerHTML = capturando;
}

// var image = function (event) {
//     img = document.getElementsByTagName('img');
//     img.src = URL.createObjectURL(event.target.files[0]);
//     // img.onload = function(){
//     //     URL.revokeObjectURL(img.src)
//     // }
// }


// function capturar() {
//     const textInput = document.getElementById('text-input');
//     const memeText = document.getElementById('meme-text');
//     textInput.addEventListener('keyup', () => {
//       memeText.innerText = textInput.value;
//     });
//   }    