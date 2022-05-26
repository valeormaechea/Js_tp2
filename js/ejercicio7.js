let numero = parseInt(prompt("Ingrese un numero entre 1 y 50: "));

while (numero < 0 || numero > 50 || isNaN(numero)) {
  numero = parseInt(prompt("Ingrese un numero válido: "));
}

for (let i = numero; i > 0; i--) {
  let j = i;
  while (j > 0) {
    document.write(i);
    j--;
  }
  document.write("<br>");
}
