let memeText = document.getElementById('meme-text');
let textImput = document.getElementById('text-input');

textImput.addEventListener('keyup', function () {
  let criarTexto = document.createElement("p");
  criarTexto.innerHTML = textImput.value;
  memeText.appendChild(criarTexto);
});

let loadFile = function (event) {
  let output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src)
  }
};
