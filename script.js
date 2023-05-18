document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Aquí puedes agregar la lógica para verificar las credenciales del usuario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "1234" && password === "1234") {
      // Redirecciona al menú
      window.location.href = "menu.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });