const selectedFile = document.getElementById('image-input');
const btnGenerateMeme = document.getElementById('btn-generate-meme');
const memeText = document.getElementById('text-input');
let memeImage =  document.createElement('img');
let memeSection = document.querySelector('#meme-text');

selectedFile.addEventListener('change', handleFiles, false);
function handleFiles() {
  const fileList = this.files;
  if (fileList.length > 1) {
    alert('Only one file at a time')
  } else {
    memeImage.src = window.URL.createObjectURL(fileList[0]);
    document.getElementById('meme-image-container').appendChild(memeImage)
  }
}
