// function User(name) {
//   this.name = name;
//   this.instancia = function () {};
// }

// User.prototype.login =function(){
//   console.log("Hola mundo")
// }

// azucar sintactuco

class User {
  constructor(name) {
    this.name = name;
    this.instancia = function () {};
  }

  activo = true;

  logout = () => {
    // con arrow funcion   se crea tirectamente en el usuario
    console.log("logout");
  };

  loging() {
    console.log("hola mundo"); // conesta sintaxo=is se crean en el prototipo
  }
}

const o = new User("chanchito feliz");
