const form = document.querySelector('.form');
const refs = {
  form,
  delayInput: form.querySelector('input[name="delay"]'),
  stepInput: form.querySelector('input[name="step"]'),
  amountInput: form.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  createPromise(position, delay);
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
