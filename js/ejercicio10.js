let filas = parseInt(prompt("Ingrese una cantidad de filas: "));
let columnas = parseInt(prompt("Ingrese una cantidad de columnas: "));

let resultado = filas * columnas;
console.log(resultado);

document.write(`<table> <tbody>`);

for (let iFilas = 0; iFilas < filas; iFilas++) {
  document.write(`<tr>`);
  for (let iColum = 0; iColum < columnas; iColum++) {
    document.write(`<td>${resultado}</td>`);
    resultado--;
  }
  document.write(`</tr>`);
}

document.write(`</tbody> </table>`);
