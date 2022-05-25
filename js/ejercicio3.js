let concatenacion="";

do{
    let cadena = prompt("Introduce una cadena: ");
    concatenacion=concatenacion+"-"+cadena;
}while(confirm("Queres continuar?"));

document.write(concatenacion);