/**
 * crea un algoritmo que imprima el numero menor y mayor de una lista
 */

let array = [100, -200, 40, -300, 50, 455, -50, 125];

function getMenorMayor(array) {
  let menor = [array[0]];
  let mayor = [array[0]];

  for (numero of array) {
    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero;
  }
  return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);
