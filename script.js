const DQSEL = function (params) { return document.querySelector(params); };
const INPUTXT = DQSEL('.input-text');
const INPUTIMG = DQSEL('#meme-insert');
const MEMEIMG = DQSEL('.meme-img');
const MEMETXT = DQSEL('#meme-text');

INPUTXT.oninput = () => {
  let inputText = document.querySelector('#text-input').value;
  MEMETXT.textContent = inputText;
};

INPUTIMG.oninput = () => {
  MEMEIMG.src = URL.createObjectURL(INPUTIMG.files[0]);
}
