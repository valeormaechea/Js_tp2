let cadena = prompt("Ingrese un texto: ");

for (let i = 0; i < cadena.length; i++) {
  document.write(cadena[i]);
  if (i < cadena.length - 1) {
    document.write("-");
  }
}
