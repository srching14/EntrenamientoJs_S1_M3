// This allows it to do nothing as long as it is not clicked.
  // variables 
  let nombre = document.getElementById('nombre');
  let edad = document.getElementById('edad');
  let mensaje = document.getElementById('mensaje');
  let btnExecute = document.getElementById('btn-execute')
  // In case the user does not enter anything
  btnExecute.addEventListener('click', function () {
  let nombre = document.getElementById('nombre').value;
  let edad = document.getElementById('edad').value;
   // In case the user does not enter anything       
  if (nombre === '' || edad === '') {
    mensaje.textContent = 'Por favor, llena todos los campos.';
    return;
  }

  // Convert age to number
  edad = Number(edad);

  // valid if it is greater or less
  if (edad >= 18) {
    mensaje.textContent ='Hola ' + nombre + ' , eres mayor de edad. Preparate para grandes oportunidades en el mundo de la programación!';
  } else {
    mensaje.textContent ='Hola ' + nombre + ' , eres menor de edad. Sigue aprendiendo y disfrutando del codigo!';
  }
});
