const usuarios = [
  { edad: 15, name: "edwin", plan: "premium" },
  { edad: 18, name: "andres", plan: "free" },
  { edad: 25, name: "felipe", plan: "free" },
  { edad: 56, name: "chancho", plan: "gold" },
];

// function getMayor(arr) {
//   let mayor = arr[0];
//   for (let usuario of arr) {
//     if (mayor.edad < usuario.edad) {
//       mayor = usuario;
//     }
//   }
//   return mayor;
// }

function getMayor(arr) {
  const mayorEdad = arr.reduce((acc, el) => {
    return el.edad > acc.edad ? el : acc;
  }, arr[0]);
  return mayorEdad;
}

const mayor = getMayor(usuarios);
console.log(mayor);
