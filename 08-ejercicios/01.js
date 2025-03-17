function paraAbsoluto(arr) {
  return arr.map((n) => Math.abs(n));
}

const ns = [-2, 3, 4, -15];

const absoluto = paraAbsoluto(ns);

console.log(absoluto);
