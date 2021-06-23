let footerForm = null;

window.addEventListener('load', () => {
  footerForm = document.getElementById('footerForm');
  footerForm.addEventListener('submit', handleFooterSubmit);
});

const handleFooterSubmit = (event) => {
  event.preventDefault();
  const data = {
    email: footerForm.elements.email.value,
  };
  console.log(data);
};
