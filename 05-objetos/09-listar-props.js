const punto = {
  x: 10,
  y: 15,
  dibujar() {
    console.log("dibujando....");
  },
};

//delete punto.dibujar

if ("dibujar" in punto) {
  punto.dibujar();
}

console.log(Object.keys(punto));

for (entry of Object.keys(punto)) {
  console.log(entry, punto[entry]); //esta forma y la siguiente es una forma no muy antigua
}

for (let llave of Object.entries(punto)) {
  console.log(llave); //no sirve para listar las propiedades cuando no sabemos sus propiedades
}

for (let llaves in punto) {
  console.log(llave, punto[llave]); //esta es la forma mas nueva que hay pero no podemos encontrar con los dos casos anteriores se recomienda usar esta manera es relativamente nueva
}
