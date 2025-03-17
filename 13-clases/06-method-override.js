class Entidad {
  constructor(id) {
    this.id = id;
    this.created_at = new Date();
  }
  save() {
    console.log("save en entidad");
  }
}

class User extends Entidad {
  constructor(name) {
    super(1);
    this.name = name;
  }
  save() {
    super.save(); // lo usamos para utilizar la logica del save del metodo padre
    console.log("save en usuario"); // para anular el save anterios sencillamene  creamos otro
  }
}

const u = new User("chanchp fleiz hp");
