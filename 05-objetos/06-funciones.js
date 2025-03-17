function Usuario(nombre) {
  this.nombre = nombre;
}

console.log(Usuario.nombre); //nombre de la funcion
console.log(usuario.length); // cantidad de arguimentos

const US = Usuario;

let user = new US("nicolas");

console.log(user);

function of(Fn, arg) {
  return new Fn(arg);
}

let user1 = of(Usuario, "chancho");

console.log(user1);

function returned() {
  return function () {
    console.log("hola mundo");
  };
}

let saludo = returned();

saludo();
