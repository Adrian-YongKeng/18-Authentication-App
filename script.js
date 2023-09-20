const formTitle = document.getElementById("form-title");
const confirmPasswordContainer = document.getElementById("confirm-password-container");
const submitButton = document.getElementById("submit");
const toggleLink = document.getElementById("toggle-link");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");


function toggleAuth() {
  const isLoginForm = formTitle.textContent === "Login";
  //conditional
  formTitle.textContent = isLoginForm ? "Sign Up" : "Login";
  submitButton.textContent = isLoginForm ? "Sign Up" : "Login";
  toggleLink.textContent = isLoginForm ? "Login" : "Sign Up";
  confirmPasswordContainer.style.display = isLoginForm ? "block" : "none";
}

const users = [];

function login(username, password) {
  if (!username || !password) {
    alert("Please enter a username and password.")
    return;
  }
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert("Sucessful login!"); // Check if either the username or password is missing
  } else {
    alert("User not found.Please sign up first.");
  }
}

function validPassword(password) {
// Use a regular expression to check if the password meets the requirements
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

function signUp(username, password, confirmPassword) {
  if (!username || !password) {
    alert("Please enter a username and password.")
    return;
  }

  if (!validPassword(password)) {
    alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.");
    return;
  }
  
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
  } else {
    users.push({ username: username, password: password });
    alert("Sign up successful! You can now log in.");
    toggleAuth();
  }
}

function handleSubmit() {
  const isLoginForm = formTitle.textContent === "Login";
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (isLoginForm) {
    login(username, password);
  } else {
    signUp(username, password, confirmPassword);
  }
}
