window.onload = function() {

  const inputDeTextop = document.querySelector("#text-input")
  inputDeTextop.addEventListener("keyup", function(){
    document.querySelector("#meme-text").innerHTML = inputDeTextop.value
  })

  const localImagem = document.querySelector("#meme-insert")
  localImagem.addEventListener("change", function(event){
  document.getElementById("meme-image").src = URL.createObjectURL(event.target.files[0]);
  })
  
  let btnFire = document.querySelector("#fire")
  let btnWater = document.querySelector("#water")
  let btnEarth = document.querySelector("#earth")
  let container = document.querySelector("#meme-image-container")

  btnFire.addEventListener("click", function (){
    container.style.border = "3px dashed red"
  })

  btnWater.addEventListener("click", function (){
    container.style.border = "5px double blue"
  })

  btnEarth.addEventListener("click", function (){
    container.style.border = "6px groove green"
  })
}
