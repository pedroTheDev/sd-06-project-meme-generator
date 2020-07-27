window.onload = function() {
let imageInPut = document.querySelector("#meme-insert");

imageInPut.addEventListener("change", function(event) {
    document.getElementById("meme-image").src = 
    URL.createObjectURL(event.target.files[0]);
    // imageOutPut.src = imageInPut.files[0].name;

})

}