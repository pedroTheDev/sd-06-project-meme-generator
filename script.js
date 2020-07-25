window.onload = function () {
  const text = document.getElementById('text-input');
  const divText = document.getElementById('meme-text');
  text.addEventListener('input', function () {
    divText.innerText = text.value;
  });

  const inputImg = document.getElementById('meme-insert');
  const img = document.getElementById('meme-image');
  inputImg.addEventListener('change', function (event) {
    img.src = URL.createObjectURL(event.target.files[0]);
  });
};
