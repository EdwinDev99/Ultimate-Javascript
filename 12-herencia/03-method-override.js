function getProto(u) {
  return Object.getPrototypeOf(u);
}

function Entidad() {}

Entidad.prototype.save = function () {
  console.log("guardando desde entidad");
};

function User() {}
//cuando esto de poder crear un metodo save que tiene el mismo el nombre del prototipo de entidad se conoce
//method override (remplazar invalidar anular el metodo)
User.prototype.save = function () {
  console.log("Guardando desde user..");
};

Object.setPrototypeOf(User.prototype, Entidad.prototype);

const u = new user();

console.log(getProto(getProto(u)).save());
