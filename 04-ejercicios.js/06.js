/**
 * crea un algoritmo que devuelva la cantidad de numero positivos que hay en un array
 */

let array = [5, 10, -3, -45, 100, -1, 98, 8];

function cuantosPositivos(arr) {
  let cantidad = 0;

  for (numero of arr) {
    if (numero > 0) {
      cantidad++;
    }
  }
  return cantidad;
}

let resultado = cuantosPositivos(array);
console.log(resultado);
