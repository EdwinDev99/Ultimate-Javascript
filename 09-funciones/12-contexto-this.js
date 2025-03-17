const usuario = {
  nombre: "edwin",
  ciudadanias: ["colombiana", "portuguesa", "canadiense"],
  mostrarCiudadania() {
    this.ciudadanias.forEach((ciudadania) => {
      // lo hacemos con arrow function por que no tiene contexto de this y busca afuera y por eso podemos usar this.name
      console.log(this.nombre, ciudadania);
    });
  },
};

usuario.mostrarCiudadania();
