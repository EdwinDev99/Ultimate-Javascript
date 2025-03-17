const usuarios = [
  { edad: 15, nombre: "edwin", plan: "premium" },
  { edad: 18, nombre: "andres", plan: "free" },
  { edad: 25, nombre: "felipe", plan: "free" },
  { edad: 56, nombre: "chancho", plan: "gold" },
];
const users = [
  { age: 11, name: "paula", membership: "premium" },
  { age: 28, name: "michael", membership: "gold" },
  { age: 45, name: "mario", membership: "free" },
  { age: 16, name: "paola", membership: "gold" },
];

const usersEspanol = users.map((u) => ({
  edad: u.age,
  nombre: u.name,
  plan: u.membership,
}));

const allUsers = [...usuarios, ...usersEspanol];
// console.log(allUsers);

allUsers.sort((a, b) => {
  if (a.edad < b.edad) return 1;
  if (a.edad > b.edad) return -1;
  return 0;
});

const lista = allUsers.map(
  (u) => `<li> nombre:${u.nombre}, edad:${u.edad}</li>`
);

const html = `
  <ul>
    ${lista.join(`
    `)}
  </ul>
`;
console.log(html);
