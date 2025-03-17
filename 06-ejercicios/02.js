function createUser(name) {
  return {
    id: Math.random(),
    name,
  };
}
let user = createUser("felipe");
let user2 = createUser("andres");
console.log(user, user2);
