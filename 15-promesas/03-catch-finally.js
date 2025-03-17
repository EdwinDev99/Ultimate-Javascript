let promesa1 = new Promise((res, rej) => {
  rej(5);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});

promesa1
  .then((valor) => {
    if (valor > 10) {
      return promesa2;
    }
  })
  .then((valor2) => {
    return valor2;
  })
  .catch((e) => console.log(e)) //solo se ejecuta cuando detecta el el error
  .finally(() => console.log("aca estamos en finally")); //siempre se ejecuta
