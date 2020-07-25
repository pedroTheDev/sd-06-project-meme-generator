window.onload = function () {

let container = document.getElementById("meme-image-container")
let caixaInput = document.getElementById("text-input")

caixaInput.addEventListener("keyup", function (){
  document.querySelector("#meme-text").innerHTML = caixaInput.value
})

}