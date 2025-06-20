// esto permte que mentras no le den click no haga nada 
document.getElementById('btn-execute').onclick = function () {
  // variables 
  let nombre = document.getElementById('nombre').value;
  let edad = document.getElementById('edad').value;
  let mensaje = document.getElementById('mensaje');

  // Por si el usuario no digita nada
  if (nombre === '' || edad === '') {
    mensaje.textContent = 'Por favor, llena todos los campos.';
    return;
  }

  // Convierte la edad a número
  edad = Number(edad);

  // valida si es mayor o menor 
  if (edad >= 18) {
    mensaje.textContent ='Hola ' + nombre + ' ,eres mayor de edad. Preparate para grandes oportunidades en el mundo de la programación!';
  } else {
    mensaje.textContent ='Hola ' + nombre + ' ,eres menor de edad. Sigue aprendiendo y disfrutando del codigo!';
  }
};
