let sendEmail = () => {
  let params = {
    name: document.getElementById ('name').value,
    email: document.getElementById ('email').value,
    subject: document.getElementById ('subject').value,
    message: document.getElementById ('message').value,
  };

  if (
    document.getElementById ('name').value === '' ||
    document.getElementById ('email').value.length < 1 ||
    document.getElementById ('subject').value === '' ||
    document.getElementById ('message').value === ''
  ) {
    alert ('All fields must be complete');
  }

  emailjs
    .send ('Mwangi_Dev', 'template_narzbdk', params)
    .then (
      alert ('Email sent successfully.'),
      document.getElementById ('sendButton').disabled,
      (document.getElementById ('name').value = ''),
      (document.getElementById ('email').value = ''),
      (document.getElementById ('subject').value = ''),
      (document.getElementById ('message').value = '')
    );
};

// document.getElementById ('name').value = '';
// document.getElementById ('email').value = '';
// document.getElementById ('subject').value = '';
// document.getElementById ('message').value = '';

// let sendButton = document.getElementById ('sendButton');
// sendButton.addEventListener ('click', sendEmail ());
