let resto = 0;
do {
  let dni = parseInt(prompt("Ingrese su numero de dni: "));
  while (dni > 99999999 || dni < 0 || isNaN(dni)) {
    alert("El valor ingresado no es valido.");
    dni = parseInt(prompt("Ingrese su numero de dni: "));
  }

  resto = dni % 23;
  document.write(dni);

  switch (resto) {
    case 0:
      document.write(" T<br>");
      break;
    case 1:
      document.write(" R<br>");
      break;
    case 2:
      document.write(" W<br>");
      break;
    case 3:
      document.write(" A<br>");
      break;
    case 4:
      document.write(" G<br>");
      break;
    case 5:
      document.write(" M<br>");
      break;
    case 6:
      document.write(" Y<br>");
      break;
    case 7:
      document.write(" F<br>");
      break;
    case 8:
      document.write(" P<br>");
      break;
    case 9:
      document.write(" D<br>");
      break;
    case 10:
      document.write(" X<br>");
      break;
    case 11:
      document.write(" B<br>");
      break;
    case 12:
      document.write(" N<br>");
      break;
    case 13:
      document.write(" J<br>");
      break;
    case 14:
      document.write(" Z<br>");
      break;
    case 15:
      document.write(" S<br>");
      break;
    case 16:
      document.write(" Q<br>");
      break;
    case 17:
      document.write(" V<br>");
      break;
    case 18:
      document.write(" H<br>");
      break;
    case 19:
      document.write(" L<br>");
      break;
    case 20:
      document.write(" C<br>");
      break;
    case 21:
      document.write(" K<br>");
      break;
    case 22:
      document.write(" E<br>");
      break;
  }
} while (confirm("Queres continuar?"));
