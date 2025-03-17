let usuarios = [
  { id: 1, activo: false },
  { id: 2, activo: false },
  { id: 3, activo: false },
];

// const todosActivos = usuarios.every((u) => {  // todos Activos
//   console.log("Todos activos", u.id);
//   return u.activo;
// });

const algunoActivo = usuarios.some((u) => {
  // alguno activo solo con encontrar uno ya esta !
  console.log("alguno activo", u.id);
  return u.activo;
});

console.log(algunoActivo);
