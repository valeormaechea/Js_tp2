let cadena = prompt("Ingrese un texto: ");
console.log(cadena);

for (let i = cadena.length; i >= 0; i--) {
  document.write(cadena.charAt(i));
  console.log(cadena.charAt(i));
}
