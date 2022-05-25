let resto = 0;
do {
  let dni = parseInt(prompt("Ingrese su numero de dni: "));
  while (dni > 99999999 || dni < 0 || isNaN(dni)) {
    alert("El valor ingresado no es valido.");
    dni = parseInt(prompt("Ingrese su numero de dni: "));
  }

  resto = (dni % 23);

  switch (resto) {
    case 0:
      document.write("T");
      break;
    case 1:
      document.write("R");
      break;
    case 2:
      document.write("W");
      break;
    case 3:
      document.write("A");
      break;
    case 4:
      document.write("G");
      break;
    case 5:
      document.write("M");
      break;
    case 6:
      document.write("Y");
      break;
    case 7:
      document.write("F");
      break;
    case 8:
      document.write("P");
      break;
    case 9:
      document.write("D");
      break;
    case 10:
      document.write("X");
      break;
    case 11:
      document.write("B");
      break;
    case 12:
      document.write("N");
      break;
    case 13:
      document.write("J");
      break;
    case 14:
      document.write("Z");
      break;
    case 15:
      document.write("S");
      break;
    case 16:
      document.write("Q");
      break;
    case 17:
      document.write("V");
      break;
    case 18:
      document.write("H");
      break;
    case 19:
      document.write("L");
      break;
    case 20:
      document.write("C");
      break;
    case 21:
      document.write("K");
      break;
    case 22:
      document.write("E");
      break;
  }
} while (confirm("Queres continuar?"));
