function Usuario(name) {
  this.id = Math.random();
  this.name = name;
}

let user = new Usuario("felipe");
let user2 = new Usuario("fandres");
console.log(user, user2);
