document.addEventListener('DOMContentLoaded', () => {

  // Login Form Submission
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
          e.preventDefault();

          const email = document.getElementById('login-email').value;
          const password = document.getElementById('login-password').value;

          // Retrieve stored credentials
          const storedEmail = localStorage.getItem('email');
          const storedPassword = localStorage.getItem('password');

          if (email === storedEmail && password === storedPassword) {
              alert('Login successful!');
              window.location.href = 'index.html';
          } else {
              alert('Incorrect email or password. Please try again.');
          }
      });
  }

  // Signup Form Submission
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
      signupForm.addEventListener('submit', function (e) {
          e.preventDefault();

          const email = document.getElementById('signup-email').value;
          const password = document.getElementById('signup-password').value;
          const passwordConfirm = document.getElementById('signup-password-confirm').value;

          if (password !== passwordConfirm) {
              alert('Passwords do not match.');
              return;
          }

          // Store credentials in localStorage (this is just for demo purposes)
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);

          alert('Signup successful! You can now log in.');
          window.location.href = 'login.html';
      });
  }

});
