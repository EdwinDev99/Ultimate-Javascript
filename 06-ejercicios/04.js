let objeto = {
  id: 1,
  name: "chanchito",
  login: function () {},
  logout: function () {},
};

function cualesSonMetodos(obj) {
  for (llave in obj) {
    if (typeof obj[llave] === "function") {
      console.log(llave);
    }
  }
}

cualesSonMetodos(objeto);
