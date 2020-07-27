window.onload = function() {

  // Input Text
    let text = document.getElementById('text-input');
    text.addEventListener('input', function() {
      let print = document.getElementById('meme-text');
      print.innerHTML = text.value;
    })

   // Input img
  let setImgInput = document.querySelector('#meme-insert');
  setImgInput.addEventListener('change', function(event) {
    document.querySelector('#meme-image').src = URL.createObjectURL(event.target.files[0]);
  })
}