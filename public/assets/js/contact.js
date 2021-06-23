let form = null;
let footerForm = null;

window.addEventListener('load', () => {
  form = document.querySelector('form');
  footerForm = document.getElementById('footerForm');

  form.addEventListener('submit', handleSubmit);
  footerForm.addEventListener('submit', handleFooterSubmit);
});

const handleSubmit = (event) => {
  event.preventDefault();
  const data = {
    name: form.elements.name.value,
    phone: form.elements.phone.value,
    email: form.elements.email.value,
    subject: form.elements.subject.value,
    message: form.elements.message.value,
  };
  console.log(data);
};

const handleFooterSubmit = (event) => {
  event.preventDefault();
  const data = {
    email: footerForm.elements.email.value,
  };
  console.log(data);
};
