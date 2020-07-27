
/*function loadImage(event) {
    let saida = document.getElementById('meme-insert');
    saida.src = URL.createObjectURL(event.target.files[0]);
    alert('carregou');
    saida.onload = function () {
        // let divExibe = document.querySelector('#meme-image');
        let imgSrc = document.querySelector('#meme-image');
        imgSrc.src = URL.revokeObjectURL(saida.src);

        // free memory
    }
}*/


function loadImage() {
    let reader = new FileReader();
    reader.onload = function () {
        let saida = document.getElementById('meme-image');
        saida.src = reader.result;
    }
    if (reader) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

function loadText() {
let inputText = document.querySelector('#text-input').value;
let pText = document.querySelector('#meme-text');
pText.innerHTML = inputText;
}