
window.onload = function(){
    let insiraSeuTexto = document.querySelector("#text-input");
    
    insiraSeuTexto.addEventListener("keyup", function(){
 document.querySelector("#meme-text").innerHTML = insiraSeuTexto.value 
    })
}