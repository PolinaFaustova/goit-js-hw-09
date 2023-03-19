import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const datatimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;

      startBtn.addEventListener('click', () => {
        startCountdown(selectedDates[0]);
      });
    }
  },
};

flatpickr(datatimePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function startCountdown(endDate) {
  const countdownInterval = setInterval(() => {
    const msLeft = endDate - new Date();
    if (msLeft <= 0) {
      clearInterval(countdownInterval);
      document
        .querySelectorAll('.value')
        .forEach(el => (el.textContent = '00'));
      Notiflix.Notify.success('Time is up!');
      return;
    }
    const timeLeft = convertMs(msLeft);

    // Обновляем интерфейс таймера с обратным отсчетом
    document.querySelector('[data-days]').textContent = addLeadingZero(
      timeLeft.days
    );
    document.querySelector('[data-hours]').textContent = addLeadingZero(
      timeLeft.hours
    );
    document.querySelector('[data-minutes]').textContent = addLeadingZero(
      timeLeft.minutes
    );
    document.querySelector('[data-seconds]').textContent = addLeadingZero(
      timeLeft.seconds
    );
  });
}
