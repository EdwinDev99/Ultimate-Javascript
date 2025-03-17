//nos sirve para iterar  las propiedades de un objeto
let user = {
  id: 0,
  name: "edwin",
  age: 24,
};
for (let prop in user) {
  console.log(prop, user[prop]);
}

//tambien lo podemos interar copn for in los arreglos pero es mejor con for of 
