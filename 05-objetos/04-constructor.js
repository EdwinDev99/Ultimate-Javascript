//esto es lo que queremos hacer: {id:1,recuperarClave fuction() {} }

function Usuario() {
  //las funciones constructoras siempre se tienen que llamar es del recurso que este cree en este caso crearemos un usuario
  //cuando creamos funciones constructivas tiene que ser en UpperCamelCase o PacalCase es la convencion
  this.id = 1;
  this.recuperarClave = function () {
    //cuando tenemos una propiedad en javascript y le estamos asignando una funcion deja de llamarse funcion y se le llama metodos!  un metodo es una funcion que fue asignada a una propiedad de un objeto!
    console.log("recuperando Clave...");
  };
}

let usuario = new Usuario(); // la palabra recervada new estamos creando el usuario si no le agreagamos el new  imprimira undefined ya que en la function anterior no retorna nada

console.log(usuario);
