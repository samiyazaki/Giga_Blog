async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#username-signup').value();
  const email = document.querySelector('#email-signup').value();

  if(username && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  }
  document
  .querySelector('.#signup-form')
  .addEventListener('submit', signupFormHandler);
