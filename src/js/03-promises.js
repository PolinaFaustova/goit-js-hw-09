const refs = {
  form: document.querySelector('.form'),
  delay: form.querySelector('input[name="delay"]'),
  step: form.querySelector('input[name="step"]'),
  amount: form.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  delay;
  if (shouldResolve) {
    // Fulfill
    createPromise.then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    });
  } else {
    // Reject
    createPromise.catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
}
