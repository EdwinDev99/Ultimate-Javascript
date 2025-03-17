const miArray = ["Hola", 12, "Mundo", {}, { id: 15 }, ["lala"]];

function dividePorTipos(arr) {
  return {
    numero: arr.filter((el) => typeof el === "number"),
    string: arr.filter((el) => typeof el === "string"),
    object: arr.filter((el) => typeof el === "object"),
  };
}
const resultado = dividePorTipos(miArray);
console.log(resultado);
