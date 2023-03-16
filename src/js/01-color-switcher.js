const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let timerId = null;

refs.startBtn.addEventListener('click', event => {
  if (!refs.startBtn.classList.contains('disabled')) {
    refs.startBtn.classList.add('disabled');
    refs.stopBtn.classList.remove('disabled');
  }
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});
refs.stopBtn.addEventListener('click', event => {
  clearInterval(timerId);
  refs.startBtn.classList.remove('disabled');
  if (!refs.stopBtn.classList.contains('disabled')) {
    refs.stopBtn.classList.add('disabled');
  }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
