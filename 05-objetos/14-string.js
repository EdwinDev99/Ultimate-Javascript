const saludos = "Hola Mundo";
//           idx 0123456789
const despedida = new String("Chao Mundo");
console.log(typeof saludos);
console.log(typeof despedida);

console.log(saludos.length); // de devuelve la longutud del sreing 10
console.log(saludos.indexOf("Mu")); // nos devuelve el indeice donde se encuentra el texto 5 si no esta devuelve (-1)
console.log(saludos.includes("Mu")); // nos devuelve true o flase si los incluye de lo contrario-1
let nuevoSaludo = saludos.replace("Mundo", "Edwin"); //podemos remplazar el primer argumento es lo que remplazamos y el segundo por el que lo replanzamos
console.log(nuevoSaludo, saludos);

console.log(saludos.toLowerCase()); // no devuelve todo en minusculas
console.log(saludos.toUpperCase()); // no devuelve todo en mayusculas
console.log(saludos.toUpperCase()); // no devuelve todo en mayusculas

// trabajar con los indices del string

console.log(saludos.substring(0, 4)); //recibe dos argumentos el indice del inicio y del final
console.log(saludos.substring(0, 4));

const espacios = "      Hola    Mundo     ";

console.log(espacios.trim()); //nos quita los espacios de inzquierda y deracha
console.log(espacios.trimEnd()); //nos quita los espacios de la derecha
console.log(espacios.trimStart()); // nos quita los espacios de la izquierda
