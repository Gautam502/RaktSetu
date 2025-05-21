// === SIGNUP ===
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signupForm = document.getElementById("signup");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let password = passwordInput.value;

    let newUser = { name, email, password };

    let users = JSON.parse(localStorage.getItem("Users")) || [];

    let existingUser = users.find(user => user.email === email);

    if (existingUser) {
      alert("User already exists with this email.");
      return;
    }

    users.push(newUser);
    localStorage.setItem("Users", JSON.stringify(users));
    alert("Signup successful!");
    signupForm.reset();
  });
}

// === LOGIN ===
const loginForm = document.getElementById("loginForm");
const userInput = document.getElementById("userName");
const passInput = document.getElementById("password1");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = userInput.value.trim();
    const password = passInput.value;

    let users = JSON.parse(localStorage.getItem("Users")) || [];

    let validUser = users.find(u => u.email === user && u.password === password);

    if (validUser) {
      alert("Login successful");
      window.location.href = "iphome.html"; // Replace with actual dashboard
    } else {
      alert("Invalid Email or Password");
    }
  });
}
