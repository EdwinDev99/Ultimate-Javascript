function generarTablero(size) {
  let tablero = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        tablero += " ";
      } else {
        tablero += "#";
      }
    }
    tablero += "\n";
  }
  return tablero;
}

let size = 8;
console.log(generarTablero(size));
