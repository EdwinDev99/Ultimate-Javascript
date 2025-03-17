let promesa1 = new Promise((res, rej) => {
  res(12);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});

promesa1
  .then((valor) => {
    if (valor > 10) {
      return promesa2;
    }
    // return Promise.reject("valor menor que 10"); //retorn una promesa pero que se encuientra ya rechazada
    return Promise.resolve(555);
  })
  .then((valor2) => {
    console.log("segunda promesa", valor2);
    return valor2;
  })
  .catch((e) => console.log(e))
  .finally(() => console.log("aca estamos en finally"));
