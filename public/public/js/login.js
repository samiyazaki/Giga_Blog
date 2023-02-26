async function loginFormHandler (event){
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-login').value();
  const passwordEl = document.querySelector('#password-input-login').value();

 
  if (usernameEl && passwordEl) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl,
        password: passwordEl
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}



document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

