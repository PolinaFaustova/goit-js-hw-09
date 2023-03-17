const refs = {
  form: document.querySelector('.form'),
  delay: form.querySelector('input[name="delay"]'),
  step: form.querySelector('input[name="step"]'),
  amount: form.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
