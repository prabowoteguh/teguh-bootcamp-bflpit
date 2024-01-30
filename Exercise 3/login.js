let loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value == "admin@co" && password.value == "password") {
    alert("Login berhasil!");
    window.location.href = "index.html";
  } else {
    alert("Username dan password salah!");

    username.value = "";
    password.value = "";
  }
})