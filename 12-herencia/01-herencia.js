function User() {
  this.name = "Hola mundo";
}

function Product() {
  console.log("Producto");
}

function Entidad() {
  Entidad.prototype.save = function () {
    console.log("guardando", this.nombre);
  };
}

function Entidad() {
  Entidad.prototype.validate = function () {
    console.log("validando", this.nombre);
  };
}
// User.prototype = Entidad.prototype;
// User.prototype.constructor = User;

// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = user;
Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(User.Product, Entidad.prototype);

const user = new User();
console.log(user);
