const obj = {
  nombre: "edwin",
};

function Extender() {
  this.login = () => {
    console.log(`Logueando ${this.nombre}`);
  };
  this.logout = () => {
    console.log(`Deslogueando ${this.nombre}`);
  };
}
Extender.call(obj);
// const logueando = new Extender();
// const deslogueando = new Extender();
console.log(obj);
obj.login();
obj.logout();
