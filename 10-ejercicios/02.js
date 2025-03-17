const obj = {
  nombre: "edwin",
};

function extender(usuario) {
  const metodos = {
    login() {
      console.log("logeuando", this.nombre);
    },
    logout() {
      console.log("delogueando", this.nombre);
    },
  };
  return Object.assign(usuario, metodos);
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();
