function imageUpload(){
    let image = document.getElementById("meme-insert");

}
function textUpload(){
    let text = document.getElementById("text-input").value;
    document.getElementById("meme-text").innerText = text;
    
}
document.getElementById("text-input").addEventListener("input",textUpload);
