const usuarios = [
  { edad: 15, name: "edwin", plan: "premium" },
  { edad: 18, name: "andres", plan: "free" },
  { edad: 25, name: "felipe", plan: "free" },
  { edad: 56, name: "chancho", plan: "gold" },
];

function getPaiusers(usrs) {
  return usrs.filter((u) => u.plan !== "free");
}

console.log(getPaiusers(usuarios));
