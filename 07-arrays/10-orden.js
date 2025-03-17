// let numeros = [-2, 10, 5, -10];

// numeros.sort(); //ordenan de mayor a menor
// numeros.reverse(); //invierten el array

// console.log(numeros);

// let letras = ["a", "p", "t", "z,", "b"];

// letras.sort();
// console.log(letras);

// let conMayusculas = ["a", "Z", "p", "c", "T"];

// z.sort((a, b) => {
//   /**
//    * a antes que b => -1
//    * b antes que a => 1
//    * si son iguales => 0
//    */
//   let alower = a.toLowerCase();
//   let blower = b.toLowerCase();

//   if (alower < blower) {
//     return -1;
//   }
//   if (alower > blower) {
//     return 1;
//   }
//   return 0;
// });

let usuarios = [
  { edad: 15, name: "edwin" },
  { edad: 30, name: "andres" },
  { edad: 23, name: "ayerbe" },
];

usuarios.sort((a, b) => {
  if (a.edad < b.edad) return -1;
  if (a.edad > b.edad) return 1;
  return 0;
});


