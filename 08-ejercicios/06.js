function dividePorTipo(arr) {
  return arr.reduce((acc, el) => {
    let llave = typeof el;
    acc[llave] = acc[llave] ? acc[llave] : [];
    acc[llave].push(el);
    return acc;
  }, {});
  return;
}

const miArray = ["hola", 12, true, "mundo", {}, { id: 12 }, ["lala"]];
// const miArray2 = ["hola", 15, true, "edwin", {}, { id: 12 }, ["siuu"]];

let arr = dividePorTipo(miArray2);
console.log(arr);
