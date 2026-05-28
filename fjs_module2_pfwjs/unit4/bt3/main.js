const registerForm = document.getElementById("register-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    username: usernameInput.value,
    email: emailInput.value,
  };

  console.log(formData);
});
