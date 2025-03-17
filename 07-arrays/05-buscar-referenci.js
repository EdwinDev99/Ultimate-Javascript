const usuarios = [
  { id: 1, name: "edwin ayerbe" },
  { id: 2, name: "chanchito" },
];

//

const resultado = usuarios.find((usuario) => {
  // y si no necesitamos el elemento si no el indice usaremos findIndex
  usuario.name === "Chanchito";
});
console.log(resultado);
