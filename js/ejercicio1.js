let edad = parseInt(prompt("Ingrese su edad: "));

if (edad > 18 && edad < 100) {
  document.write("Apto para conducir.");
} else if (edad <= 18) {
  document.write("No apto para conducir.");
} else {
  document.write("El numero ingresado no es válido.");
}
