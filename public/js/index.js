let heroForm = null;
let footerForm = null;

window.addEventListener('load', () => {
  heroForm = document.getElementById('heroForm');
  footerForm = document.getElementById('footerForm');

  heroForm.addEventListener('submit', handleSubmit);
  footerForm.addEventListener('submit', handleSubmit);
});

const handleSubmit = (event) => {
  event.preventDefault();
  const data = {
    email: event.target.elements.email.value,
  };
  console.log(data);
};
