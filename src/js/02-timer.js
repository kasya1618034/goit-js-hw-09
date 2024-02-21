import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      window.alert("Please choose a date in the future");
      document.querySelector('[data-start]').disabled = true;
    } else {
      document.querySelector('[data-start]').disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

let countdownInterval;

function startCountdown() {
  const selectedDate = flatpickr.parseDate(document.querySelector('#datetime-picker').value, 'Y-m-d H:i');;
  const currentDate = new Date();
  if (selectedDate <= currentDate) {
    window.alert("Please choose a date in the future");
    return;
  }

  countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

function updateCountdown() {
  const selectedDate = flatpickr.parseDate(document.querySelector('#datetime-picker').value, 'Y-m-d H:i');
  const currentDate = new Date();
  const timeDifference = selectedDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    document.querySelector('[data-start]').disabled = true;
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeDifference);
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

document.querySelector('[data-start]').addEventListener('click', startCountdown);
