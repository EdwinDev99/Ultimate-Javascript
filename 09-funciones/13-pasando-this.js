(function saludar(...rest) {
  console.log(this, rest);
}).bind({ propiedad: "Hola mundo" });

// saludar.call({ propiedad: "Hola mundo" }, 1, 2);
// call recibe los riguientes argumentos 1: el contexto de this y siguiente los argumentos que le vamos a pasar a la funcion eje saludar
// saludar.apply({ propiedad: "Hola mundo" }, [1, 2]); // en este caso se pasa argumento como array
// saludar.bind({ propiedad: "Hola mundo" }); // lo pasamos arriba
