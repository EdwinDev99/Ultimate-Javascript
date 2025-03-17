/**
 * crea un algoritmo que tome  un array de
 * objetos y devuelva un array de pares
 */

let array = [
  {
    id: 1,
    name: "edwin",
  },
  {
    id: 2,
    name: "andres",
  },
  {
    id: 3,
    name: "paula",
  },
];

function toPairs(arr) {
  let pairs = [];
  for (idx in arr) {
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }
  return pairs;
}

let resultado = toPairs(array);
console.log(resultado);
