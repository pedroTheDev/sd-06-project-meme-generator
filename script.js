function onLoadText() {
  const texto = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerHTML = texto;
}

function onLoadImg() {
  const img = document.getElementById('meme-image');
  img.src = URL.createObjectURL(event.target.files[0]);
  img.onload = function () {
    URL.revokeObjectURL(img.src);
  };
}