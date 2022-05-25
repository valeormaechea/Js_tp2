let concatenacion = "";

do {
  let cadena = prompt("Introduce una cadena: ");
  if (concatenacion == "") {
    concatenacion = cadena;
  } else {
    concatenacion = concatenacion + "-" + cadena;
  }
} while (confirm("Queres continuar?"));

document.write(concatenacion);
