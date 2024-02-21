function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let colorChangeInterval;

function startColorChanging() {
  colorChangeInterval = setInterval(function () {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  document.querySelector('[data-start]').disabled = true;
}

function stopColorChanging() {
  clearInterval(colorChangeInterval);
  document.querySelector('[data-start]').disabled = false;
}

document.querySelector('[data-start]').addEventListener('click', startColorChanging);
document.querySelector('[data-stop]').addEventListener('click', stopColorChanging);
