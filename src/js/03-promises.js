function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({ position, delay });
  } else {
    reject({ position, delay });
  }
}

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
});
