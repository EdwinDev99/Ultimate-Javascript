(function saludar(...rest) {
  console.log(this, rest);
}).bind({ propiedad: "Hola mundo" });

// saludar.call({ propiedad: "Hola mundo" }, 1, 2);
// saludar.apply({ propiedad: "Hola mundo" }, [1, 2]); // en este caso se pasa argumento como array
// saludar.bind({ propiedad: "Hola mundo" }); // lo pasamos arriba
