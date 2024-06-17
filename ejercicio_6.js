// Crear el archivo “ejercicio_6.js”. Declarar un array llamado “meses” y que tenga guardado los meses
// del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este le devolverá el
// nombre del mes. Por ejemplo, escribir un 5 debe devolver el mes mayo.

let meses = [
    "enero", 
    "febrero", 
    "Marzo", 
    "Abril", 
    "Mayo", 
    "Junio", 
    "Julio", 
    "Agosto", 
    "Septiembre", 
    "Octubre", 
    "Noviembre", 
    "Diciembre"
];

buscarMes();

function buscarMes() {
    let numero = prompt("Ingrese un numero del 1 al 12");
    let indice = Number(numero)-1;

    if (indice >= 0  && indice < '12' ) {
        alert("El numero ingresado correcsponde al mes " + meses[indice]);
        // document.write("El numero ingresado correcsponde al mes: " + meses[indice])
    } else {
        alert("numero invalido. Por favor, ingrese un numero del 1 al 12");
    }
}

