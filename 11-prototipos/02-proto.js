function User() {
  this.name = "hola mundo";
  //metodo de instancia
  this.logger = function () {
    console.log("logueando...");
    this.login();
  };
}

const user1 = new User();
const user2 = new User();
//metodo prototipo

User.prototype.login = function () {
  console.log("iniciando sesion...", this.name);
};

User.prototype.toString = function () {
  console.log("Usuario:", this.name);
};

console.log(user1.login());
