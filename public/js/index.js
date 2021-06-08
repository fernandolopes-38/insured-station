let form = null;

window.addEventListener('load', () => {
  form = document.querySelector('form');

  form.addEventListener('submit', handleSubmit);
});

const handleSubmit = (event) => {
  event.preventDefault();
  const data = {
    email: form.elements.email.value,
  };

  console.log(data);
};
