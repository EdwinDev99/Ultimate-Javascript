function suma(fn, ...res) {
  let resultado = res.reduce((acc, el) => acc + el);
  fn(resultado);
}
suma(
  (resultado) => {
    console.log(resultado);
  },
  1,
  2,
  3,
  4
);
