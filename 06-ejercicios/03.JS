function similares(obj1, obj2) {
  let distintos = false;

  for (llave in obj1) {
    if (obj1[llave] !== obj2[llave]) {
      distintos = true;
    }
    return !distintos;
  }
}

let resultado = similares({ id: 1, name: "edwin" }, { id: 1, name: "andres" });
console.log(resultado);
