const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function computeTwoDigitNumber(number) {
  return number.toString().padStart(2, '0');
}
function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  minDecElement.innerText = computeTwoDigitNumber(minutes)[0];
  minUniElement.innerText = computeTwoDigitNumber(minutes)[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  secDecElement.innerText = computeTwoDigitNumber(seconds)[0];
  secUniElement.innerText = computeTwoDigitNumber(seconds)[1];

}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.getMilliseconds();
  milDecElement.innerText = computeTwoDigitNumber(milliseconds)[0];
  milUniElement.innerText = computeTwoDigitNumber(milliseconds)[1];

}

function printSplit() {
  const newSplit = document.createElement('li');
  newSplit.className = 'list-item';
  newSplit.innerHTML = chronometer.split(); // Get formatted split time
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  splitsElement.innerHTML = ''; 
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
  chronometer.start(printTime);
}

function setSplitBtn() {

  chronometer.split();
  
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
  chronometer.stop();
}

function setResetBtn() {
  minDecElement.innerText = '0';
  minUniElement.innerText = '0';
  secDecElement.innerText = '0';
  secUniElement.innerText = '0';
  milDecElement.innerText = '0';
  milUniElement.innerText = '0';
  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    
    setStopBtn();
    
  } else {
   
    setStartBtn();
    
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    printSplit();
    setSplitBtn();
  } else {
    clearSplits();
   
   setResetBtn();
  }
});