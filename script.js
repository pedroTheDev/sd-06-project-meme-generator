window.onload = function(){
function textUpload(event){
    let text = document.getElementById("text-input").value;
    document.getElementById("meme-text").innerText = text;
    
}
function imageUpload(event) {
    var output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) 
    }
}
document.getElementById("text-input").addEventListener("input",textUpload);

document.getElementById("meme-insert").addEventListener("change",imageUpload);
}