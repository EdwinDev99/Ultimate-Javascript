//propiedades o metodos privados

// function User() {
//   let name = a;
//   this.getName = function () {
//     return name;
//   };
// }

// const u = new User("chancho");

class User {
  #name;
  constructor(name) {
    this.#name = name;
  }
  #logger() {}
  getName() {
    this.#logger();
    return this.#name;
  }
}
const u = new User("chancho");
