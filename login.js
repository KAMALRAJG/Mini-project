const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

function validateForm() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '' || password === '') {
    alert('Please fill in all fields.');
    return false;
  }

  // Add additional validation logic here, such as checking the username and password against a database.

  return true;
}

function handleInputChange() {
  if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
    loginBtn.disabled = true;
  } else {
    loginBtn.disabled = false;
  }
}

usernameInput.addEventListener('input', handleInputChange);
passwordInput.addEventListener('input', handleInputChange);

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    window.location.href = 'dashboard.html';
  }
});
