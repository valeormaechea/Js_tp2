let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
  nombres[i] = prompt("Ingrese un nombre: ");
  edades[i] = parseInt(prompt("Ingrese la edad: "));
}

let maximo = edades.indexOf(Math.max(edades[0], edades[1], edades[2]));
console.log(maximo);

document.write("El mayor es: " + nombres[maximo]);
