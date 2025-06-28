function toggleForms() {
  document.getElementById('signup-form').style.display =
    document.getElementById('signup-form').style.display === 'none' ? 'block' : 'none';
  document.getElementById('login-form').style.display =
    document.getElementById('login-form').style.display === 'none' ? 'block' : 'none';
}

function getUsers() {
  return JSON.parse(localStorage.getItem("kinderUsers")) || [];
}

function saveUsers(users) {
  localStorage.setItem("kinderUsers", JSON.stringify(users));
}

function signup() {
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value;

  if (!username || !password) {
    alert("Please fill in both fields.");
    return;
  }

  let users = getUsers();

  // Check for duplicate username
  if (users.some(user => user.username === username)) {
    alert("Username already exists. Please choose another.");
    return;
  }

  users.push({ username, password });
  saveUsers(users);

  alert("Account created! Please login.");
  toggleForms();
}

function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;

  const users = getUsers();
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", username);
    document.getElementById("auth-overlay").style.display = "none";
    document.getElementById("main-content").classList.remove("blurred");
    alert(`Welcome, ${username}!`);
  } else {
    alert("Invalid username or password.");
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  document.getElementById("auth-overlay").style.display = "flex";
  document.getElementById("main-content").classList.add("blurred");
}
window.onload = function () {
  const currentUser = localStorage.getItem("loggedInUser");

  if (currentUser) {
    document.getElementById("auth-overlay").style.display = "none";
    document.getElementById("main-content").classList.remove("blurred");
  } else {
    document.getElementById("auth-overlay").style.display = "flex";
    document.getElementById("main-content").classList.add("blurred");
  }
};
