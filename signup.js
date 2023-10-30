const nameInput = document.getElementById('name');
const dobInput = document.getElementById('dob');
const genderInput = document.getElementById('gender');
const sportsInput = document.getElementById('sports');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const signupBtn = document.getElementById('signup-btn');

function validateForm() {
  const name = nameInput.value.trim();
  const dob = dobInput.value.trim();
  const gender = genderInput.value.trim();
  const sports = sportsInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (name === '' || dob === '' || gender === '' || sports === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all fields.');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return false;
  }

  return true;
