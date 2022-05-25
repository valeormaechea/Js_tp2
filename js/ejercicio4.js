let resultado=0;

do {
  let numeros = parseInt(prompt("Ingrese un numero: "));
  while (isNaN(numeros)) {
    alert("El valor ingresado no es un numero.");
    numeros = parseInt(prompt("Ingrese un valor válido: "));
  }

  resultado = resultado + numeros;
} while (confirm("Queres continuar?"));

document.write(
  "El resultado de la suma de los numeros ingresados es: " + resultado
);
