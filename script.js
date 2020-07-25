window.onload = function () {
  const text = document.getElementById('text-input');
  const divText = document.getElementById('meme-text');
  text.addEventListener('input', function () {
    divText.innerText = text.value; 
  });
};
