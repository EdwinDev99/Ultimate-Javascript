let punto = {
  x: 10,
  y: 15,
};

let referencia = Object.assign(punto, { z: 7 }); //el metodo assign nos permite asignar si queremos clonar el objeto pasamos como primer argumento un objeto vacio como lo vamos hacer a continuacion
let clonePunto = Object.assign({}, punto, { z: 7, x: 1 });
// console.log(punto, clonePunto);
// console.log(referencia);

let copiaPunto = Object.assign({}, punto);
// console.log(copiaPunto, punto); // solo que esta forma es un poco antigua para copiar un objeto

let copia3 = { ...punto }; // esta es la forma con spred operator copiamos exactamente el objeto y la mas actual
console.log(copia3);
