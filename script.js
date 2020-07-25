window.onload = function() {

  let inputDeTextop = document.querySelector("#text-input")
  inputDeTextop.addEventListener("keyup", function(){
    document.querySelector("#meme-text").innerHTML = inputDeTextop.value
  })

  let localImagem = document.querySelector("#meme-insert")
  localImagem.addEventListener("input", function(){
  document.getElementById("meme-image").src = URL.createObjectURL(event.target.files[0]);
  })
  console.log(document.getElementById("meme-image"))
}