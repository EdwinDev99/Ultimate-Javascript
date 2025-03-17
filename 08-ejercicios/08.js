const usuarios = [
  { edad: 15, name: "edwin", plan: "premium" },
  { edad: 18, name: "andres", plan: "free" },
  { edad: 25, name: "felipe", plan: "free" },
  { edad: 56, name: "chancho", plan: "gold" },
];

const usuariosPago = usuarios.filter((u) => u.plan !== "free");

usuarios.sort((a, b) => {
  if (a.edad < b.edad) return 1;
  if (a.edad > b.edad) return -1;
  return 0;
});

const lista = usuariosPago.map((u) => `<li>${u.name}</li>`);

const html = `
  <ul>
    ${lista.join(`
    `)}
  </ul>
`;

console.log(html);
