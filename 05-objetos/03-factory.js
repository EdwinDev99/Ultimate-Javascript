//se usa para no tener un codigo tan repetitivo, ej: cuando nesecitamos muchos usuarios !

// let user = {
//   email: "panchi@hotmail.io",
//   name: "panchito",               // de esta manera pasamo  el contenido a la funcion
//   activo: true,                   //pasamos los parametros
//   recuperarClave: function () {
//     console.log("recupenado clave");
//   },
// };

function crearUsuario(email, name) {
  // las factory fuction siempre tienen que escribirse
  return {
    // con camelCase
    email,
    name,
    activo: true,
    recuperarClave: function () {
      console.log("recupenado clave");
    },
  };
}
let user1 = crearUsuario("edwin", "edwin@hola.com");
let user2 = crearUsuario("andres", "andres@hola.com"); // asi podemos crear usuarios mas rapido y sin repetir codigo

console.log(user1, user2);
