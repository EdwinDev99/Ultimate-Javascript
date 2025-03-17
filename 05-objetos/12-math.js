console.log(
  Math.PI, //nos devuelve el numero de PI
  Math.abs(-15), //nos decuelve el numero en positivo
  Math.round(21.6), //nos redondea el numero depende si es mayor o menor de los decimales eneste caso 22
  Math.round(21.4), // en este caso 21
  Math.floor(15.9), //siempre nos redonde hacia bajo
  Math.ceil(15.1), //siempre redonde hacia arriba
  Math.pow(2, 3), //calcular la potencia de un numero en este caso 2 elevado a la 3
  Math.sqrt(9), //nos devuelve la raiz cuadrada de un numero
  Math.random() //nos devuelve un numero al azar ente 0 a 1x
);

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(getRandom(1, 10));
