<!DOCTYPE html>
<html>
<head>
  <title>Login and Sign Up</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }

    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    h2 {
      text-align: center;
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
    }

    .form-group input {
      width: 100%;
      padding: 5px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    .form-group input[type="submit"] {
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }

    .form-group input[type="submit"]:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Login</h2>
    <form id="loginForm">
      <div class="form-group">
        <label for="loginEmail">Email:</label>
        <input type="email" id="loginEmail" required>
      </div>
      <div class="form-group">
        <label for="loginPassword">Password:</label>
        <input type="password" id="loginPassword" required>
      </div>
      <div class="form-group">
        <input type="submit" value="Login">
      </div>
    </form>
    <hr>
    <h2>Sign Up</h2>
    <form id="signupForm">
      <div class="form-group">
        <label for="signupName">Name:</label>
        <input type="text" id="signupName" required>
      </div>
      <div class="form-group">
        <label for="signupEmail">Email:</label>
        <input type="email" id="signupEmail" required>
      </div>
      <div class="form-group">
        <label for="signupPassword">Password:</label>
        <input type="password" id="signupPassword" required>
      </div>
      <div class="form-group">
        <input type="submit" value="Sign Up">
      </div>
    </form>
  </div>

  <script>
    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var email = document.getElementById('loginEmail').value;
      var password = document.getElementById('loginPassword').value;

      // Perform login validation and authentication here
      // Example: Check if email and password match stored credentials

      // Placeholder code to display success message
      alert('Login successful!');
    });

    // Sign up form submission
    document.getElementById('signupForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('signupName').value;
      var email = document.getElementById('signupEmail').value;
      var password = document.getElementById('signupPassword').value;

      // Perform sign up validation and authentication here
      // Example: Store user information in a database

      // Placeholder code to display success message
      alert('Sign up successful!');
    });
  </script>

  <style>
    body {
      font-family: Arial, sans-serif;
    }

    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    h2 {
      text-align: center;
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
    }

    .form-group input {
      width: 100%;
      padding: 5px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    .form-group input[type="submit"] {
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }

    .form-group input[type="submit"]:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Login</h2>
    <form id="loginForm">
      <div class="form-group">
        <label for="loginEmail">Email:</label>
        <input type="email" id="loginEmail" required>
      </div>
      <div class="form-group">
        <label for="loginPassword">Password:</label>
        <input type="password" id="loginPassword" required>
      </div>
      <div class="form-group">
        <input type="submit" value="Login">
      </div>
    </form>
    <hr>
    <h2>Sign Up</h2>
    <form id="signupForm">
      <div class="form-group">
        <label for="signupName">Name:</label>
        <input type="text" id="signupName" required>
      </div>
      <div class="form-group">
        <label for="signupEmail">Email:</label>
        <input type="email" id="signupEmail" required>
      </div>
      <div class="form-group">
        <label for="signupPassword">Password:</label>
        <input type="password" id="signupPassword" required>
      </div>
      <div class="form-group">
        <input type="submit" value="Sign Up">
      </div>
    </form>
  </div>

  <script>
    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var email = document.getElementById('loginEmail').value;
      var password = document.getElementById('loginPassword').value;

      // Perform login validation and authentication here
      // Example: Check if email and password match stored credentials

      // Placeholder code to display success message
      alert('Login successful!');
    });

    // Sign up form submission
    document.getElementById('signupForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('signupName').value;
      var email = document.getElementById('signupEmail').value;
      var password = document.getElementById('signupPassword').value;

      // Perform sign up validation and authentication here
      // Example: Store user information in a database

      // Placeholder code to display success message
      alert('Sign up successful!');
    });
  </script>
</body>
</html>

