let nota = parseInt(prompt("Ingrese una nota: "));

while(isNaN(nota)){
    nota = parseInt(prompt("Ingrese un número válido: "));
}

while (nota < 0 || nota > 10) {
  nota = parseInt(prompt("Número erróneo. Ingrese un número entre 0 y 10: "));
}

switch (nota) {
  case 0:
  case 1:
  case 2:
    alert("Muy deficiente.");
    break;
  case 3:
  case 4:
    alert("Insuficiente.");
    break;
  case 5:
  case 6:
    alert("Suficiente.");
    break;
  case 7:
    alert("Bien.");
    break;
  case 8:
  case 9:
    alert("Notable.");
    break;
  case 10:
    alert("Sobresaliente.");
    break;
  default:
    break;
}
