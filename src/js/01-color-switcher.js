const refs = {
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const handleClickStart = () => {
  getRandomHexColor();
};
const handleClickStop = () => {
  console.log('Button was clicked');
};

refs.buttonStart.addEventListener('click', handleClickStart);
refs.buttonStop.addEventListener('click', handleClickStop);
