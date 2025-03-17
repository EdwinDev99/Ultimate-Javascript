// const numeros = [1, 2, 3, 4];

const suma = numeros.reduce((acc, el) => {
  //recibe  dos parametros acomulador,elemnto
  return acc + el;
}, 0); // y inicia en 0

// const anidados = [[1, 2], 3, [4, 5]];

// const plano = anidados.reduce((acc, el) => acc.concat(el), []);

// console.log(plano);

let usuarios = [
  { edad: 15, nombre: "edwin" },
  { edad: 18, nombre: "andres" },
  { edad: 24, nombre: "chancho" },
  { edad: 30, nombre: "nicolas" },
];

const indexado = usuarios.reduce(
  (acc, el) => ({
    ...acc,
    [el.nombre]: el,
  }),
  {}
);
// indexado["edwin"];
console.log(indexado);
