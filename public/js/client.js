const adminForm = document.querySelector('.adminForm');
if (adminForm) {
  adminForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const response = await fetch('/admin', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        login: event.target.login.value,
        password: event.target.password.value,
      }),
    });
    const responseJson = await response.json();
    if (responseJson.status === 'error') {
      document.querySelector('.infoBlock').innerHTML = responseJson.message;
    } else {
      window.location.assign(responseJson.url);
    }
  });
}
