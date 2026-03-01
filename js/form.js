const form = document.querySelector('#form');
const changeTextButton = document.getElementById('changeText');

// Agregar un event listener para el evento submit del formulario
form.addEventListener('submit', function(e){
  e.preventDefault(); // Evitar el envío del formulario por defecto
  const name = document.getElementById('names').value;
  const surname = document.getElementById('surnames').value;
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const genero = document.getElementById('genero').value;
  const horario = document.getElementById('horario').value;
  sessionStorage.setItem('nombreUsuario', name);
  //capturar los datos del formulario
  const formData = {
    names: name,
    surnames: surname,
    number: number,
    email: email,
    genero: genero,
    horario: horario
  };
  console.log(formData);
  // Cambiar el texto del botón
  changeText();
  // Reirigir después del mensaje
  setTimeout(function() {
    window.location.href = './html/turno_asignado.html';  
  }, 1000);

});

// Función para cambiar el texto del botón
function changeText() {
  const changeTextButton = document.getElementById("changeText");
  changeTextButton.value= "Enviado...";
}
