let cadena = prompt("Ingrese un texto: ");
console.log(cadena);

for (let i = 0; i < cadena.length; i++) {
  if (
    cadena.charAt(i) == "a" ||
    cadena.charAt(i) == "e" ||
    cadena.charAt(i) == "i" ||
    cadena.charAt(i) == "o" ||
    cadena.charAt(i) == "u"
  ) {
    let vocales = i;
    document.write(`La primera vocal de este texto se encuentra en la posicion ${i}.`)
    break;
  }
}

