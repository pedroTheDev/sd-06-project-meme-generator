const DQSEL = function (params) { return document.querySelector(params); };
const INPUTXT = DQSEL('.input-text');
const INPUTIMG = DQSEL('#meme-insert');
const MEMEIMG = DQSEL('.meme-img');
const MEMETXT = DQSEL('#meme-text');

function getInputText() {
  return document.querySelector('#text-input').value;
}

INPUTXT.oninput = () => {
  MEMETXT.textContent = getInputText();
};

INPUTIMG.oninput = () => {
  MEMEIMG.src = URL.createObjectURL(INPUTIMG.files[0]);
};
