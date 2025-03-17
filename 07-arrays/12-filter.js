let usuarios = [
  { edad: 15, nombre: "edwin" },
  { edad: 18, nombre: "andres" },
  { edad: 24, nombre: "chancho" },
  { edad: 30, nombre: "nicolas" },
];

const mayores = usuarios.filter((u) => u.edad > 17);
const menores = usuarios.filter((u) => u.edad < 17);

// console.log(mayores);
console.log(menores);
