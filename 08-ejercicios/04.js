const usuarios = [
  { edad: 15, name: "edwin", plan: "premium" },
  { edad: 18, name: "andres", plan: "free" },
  { edad: 25, name: "felipe", plan: "free" },
  { edad: 56, name: "chancho", plan: "gold" },
];

function cuantosPremium(usrs) {
  return usrs.reduce((acc, el) => {
    return el.plan !== "free" ? acc + 1 : acc;
  }, 0);
}

function cuantosMayores(usrs) {
  return usrs.reduce((acc, el) => {
    return el.edad >= 18 ? acc + 1 : acc;
  }, 0);
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));
