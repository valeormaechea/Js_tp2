let numero = parseInt(prompt("Ingrese un numero entre 1 y 50: "));

while (numero < 0 || numero > 50 || isNaN(numero)) {
  numero = parseInt(prompt("Ingrese un numero válido: "));
}

for (let i = 1; i <= numero; i++) {
  let j = 1;
  while (j <= i) {
    document.write(j);
    j++;
  }

  document.write("<br>");
}
