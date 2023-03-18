const form = document.querySelector('.form');
const refs = {
  form,
  delayInput: form.querySelector('input[name="delay"]'),
  stepInput: form.querySelector('input[name="step"]'),
  amountInput: form.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]'),
};

function createPromise(position, delay, step, amount) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      if (position < amount) {
        createPromise(position + 1, delay + step, step, amount);
      }
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      if (position < amount) {
        createPromise(position + 1, delay + step, step, amount);
      }
    });
}

function handleSubmit(event) {
  event.preventDefault();

  const delay = parseInt(refs.delayInput.value);
  const step = parseInt(refs.stepInput.value);
  const amount = parseInt(refs.amountInput.value);
  let position = 1;
  createPromise(position, delay, step, amount);
}

refs.form.addEventListener('submit', handleSubmit);
