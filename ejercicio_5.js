let dato, resultado;
// En la linea 1, estamos declarando las variables "dato y resultado"
val1 = window.prompt("Introduce tu nombre", "...");
// En la linea 3, le estamos pidiendo al usuario que ingrese
//su nombre mediante un cartel que aparece en el navegador
val2 = window.prompt("Introduce tu apellido", "...");
// En la linea 6, le estamos pidiendo al usuario que ingrese
//su apellido, mediante un cartel que aparece en el navegador
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} `;
// En la linea 9, a la variable resultado se le asigna el string, cadena de texto y valores
document.write(resultado);
// En la linea 11, e muestra en pantalla el el contenido de la variable "resultado" "
