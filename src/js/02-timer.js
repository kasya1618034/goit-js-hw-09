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

}