let edad = parseInt(prompt("Ingrese su edad: "));

while (isNaN(edad) || edad < 0) {
  edad = parseInt(prompt("Dato inválido. Ingrese su edad nuevamente: "));
}

if (edad > 18) {
  document.write("Apto para conducir.");
} else {
  document.write("No apto para conducir.");
}
