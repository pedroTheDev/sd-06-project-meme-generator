window.onload = function() {

  const inputDeTextop = document.querySelector("#text-input")
  inputDeTextop.addEventListener("keyup", function() {
    document.querySelector("#meme-text").innerHTML = inputDeTextop.value
  })

  const localImagem = document.querySelector("#meme-insert")
  localImagem.addEventListener("change", function(event) {
    document.getElementById("meme-image").src = URL.createObjectURL(event.target.files[0]);
  })

}
