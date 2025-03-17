const usuarios = [
  { edad: 15, name: "edwin", plan: "premium" },
  { edad: 18, name: "andres", plan: "free" },
  { edad: 25, name: "felipe", plan: "free" },
  { edad: 56, name: "chancho", plan: "gold" },
];

function byGroup(arr, prop) {
  return arr.reduce((acc, el) => {
    let valor = el[prop];
    acc[valor] = acc[valor] ? acc[valor] : [];

    acc[valor].push(el);
    return acc;
  }, {});
}

const grouped = byGroup(usuarios, "plan");
console.log({ grouped });
