const SELECTEDFILE = document.getElementById('meme-insert');
const TEXTINPUT = document.getElementById('text-input');
const MEMEIMAGE = document.createElement('img');
const MEMETEXTSECTION = document.querySelector('#meme-text');

function handleFiles() {
  const fileList = this.files;
  if (fileList.length > 1) {
    alert('Only one file at a time');
  } else {
    MEMEIMAGE.src = window.URL.createObjectURL(fileList[0]);
    MEMEIMAGE.id = 'meme-image';
    MEMEIMAGE.className = 'meme-image';
    document.getElementById('meme-image-container').appendChild(MEMEIMAGE);
  }
}

function updateText(e) {
  MEMETEXTSECTION.textContent = e.value;
}

SELECTEDFILE.addEventListener('change', handleFiles, false);

TEXTINPUT.oninput = () => {
  updateText(TEXTINPUT);
};
