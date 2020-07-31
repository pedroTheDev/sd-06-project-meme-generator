    const loadFile = function(event) {
    const output = document.getElementById ('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src);
    };
  };
  const inputTextBox = document.getElementById('text-input');
  const paragraph = document.getElementById("output-text");
  function insertText(event) {
    document.querySelector('text-input');
    paragraph.innerHTML = inputTextBox.value;
  }
  inputTextBox.addEventListener('keyup', insertText);

  function styleFire() {
    document.querySelector('#meme-image-container').style.border = '3px dashed red'
  }
  
  function styleWater() {
    document.querySelector('#meme-image-container').style.border = '5px double blue'
  }
  
  function styleEarth() {
    document.querySelector('#meme-image-container').style.border = '6px groove green'
  }
  // Botões adicionam borda
  // Botão Fire
  const buttonFire = document.createElement('button');
  buttonFire.id = 'fire';
  buttonFire.className = 'custom-button';
  const textBtnFire = document.createTextNode('Fire');
  buttonFire.appendChild(textBtnFire);
  buttonFire.style.backgroundColor = 'red';
  buttonFire.addEventListener('click', styleFire);
  // Botão Water
  const buttonWater = document.createElement('button');
  buttonWater.id = 'water';
  buttonWater.className = 'custom-button';
  const textBtnWater = document.createTextNode('Water');
  buttonWater.appendChild(textBtnWater);
  buttonWater.style.backgroundColor = 'blue';
  buttonWater.addEventListener('click', styleWater);
  // botão Earth
  const buttonEarth = document.createElement('button');
  buttonEarth.id = 'earth';
  buttonEarth.className = 'custom-button';
  const textBtnEarth = document.createTextNode('Earth');
  buttonEarth.appendChild(textBtnEarth);
  buttonEarth.style.backgroundColor = 'green';
  buttonEarth.addEventListener('click', styleEarth);

  document.querySelector('.customization').appendChild(buttonFire);
  document.querySelector('.customization').appendChild(buttonWater);
  document.querySelector('.customization').appendChild(buttonEarth);
