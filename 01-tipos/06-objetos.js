let personaje = {
  nombre: "goku",
  edad: 20,
  anime: "dragon ball",
};

//aceder a las propiedades

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

delete personaje.edad; //eliminar propiedad del personaje.
