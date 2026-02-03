const user = { id: 1 };

/**si nosostros usamos un objeto podemos cambiar todas sus propiedades y tambien los valores que este tiene independiente si lo creamos con const o con let */

user.name = "nicolas";
user.guardar = function () {
  console.log("guardando", user.name);
};

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//const user1 = Object.freeze({ id: 1 });
// en caso que no queramos no que se puedan cambiar las propiedades ni valores usamos el object.freeze
const user1 = Object.seal({ id: 1 }); // sin embargo queremos que sus propiedades este fijas pero que sus valores si puedan cambiar usamos object.seal

user1.name = "nico";
user1.id = 2;
console.log(user1);
