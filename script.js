function previewImagem() {
    let imagem = document.querySelector('#').files[0];
    let preview = document.querySelector('img');
    let text = document.querySelector('#text-input')
    let memeText = document.querySelector("")

    function Phrase() {




    }

}


var loadFile = function(event) {
    var output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
};