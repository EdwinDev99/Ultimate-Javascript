/**
 * tenemos que hacer el ejercicio a la inversa del ejercicio anterior
 */
let pairs = [
  [1, { name: "Nicolas" }],
  [2, { name: "felipe" }],
  [3, { name: "chanchito" }],
];

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

function getCollection(arr) {
  let collection = [];
  for (idx in arr) {
    let elemento = arr[idx];
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0];
  }
  return collection;
}

let resultado = getCollection(pairs);
console.log(resultado);
