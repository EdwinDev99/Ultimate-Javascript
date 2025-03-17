// this hace referencia un objeto
// peros si this no se encuentra dentro de un objeto, si no dentro de una funcion hace referencioa al objeto windowm o global,

// pero si usamos la palabra reservada de new hace referencia al objeto que sera creado

// cuando this hace referencia al objetop :
// const user = {
//   name: "edwin",
//   login() {
//     console.log(this);
//   },
// };

// user.logout = function logout() {
//   console.log(this);
// };

// user.logout();

//ciando this se encuentra en una funcion
// function log() {
//   console.log(this); //imprime el objeto window
// }
// log();

function Log() {
  this.mensaje = this.mensaje;
  console.log(this);
}

// cuando usamos la palabra reservada de new pasa 4 cosas
/**
 * se cre un objeto literal
 * se vincula este objeto a this
 * se vinvula el prototipo
 * si no retorna nada retorna this
 */

const l = new Log("hola mungo");
