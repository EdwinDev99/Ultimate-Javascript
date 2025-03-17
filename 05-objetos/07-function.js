function Punto(x, y) {
  (this.x = x),
    (this.y = y),
    (this.dibujar = function () {
      console.log("dibujando");
    });
}

let punto = { z: 7 };
// Punto.call(punto, 1, 2); call y apply nos permite poder externder objeteos que hallamos definido antes
Punto.apply(punto, [1, 2]); //solo que en aplay se usas copmo array

console.log(punto);
