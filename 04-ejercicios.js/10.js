/**
 * crea un array  de longitud N ,y que sus elementos sean
 * numeros de 1 a N
 */

let longitud = 10;

function crearArray(n) {
  if (n <= 0) {
    return [];
  }
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = i + 1;
  }
  return array;
}

let resultado = crearArray(longitud);

console.log(resultado);
