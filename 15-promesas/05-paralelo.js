const p1 = Promise.resolve(3);
const p2 = 45;
const p3 = new Promise((res, sej) => {
  setTimeout(res, 1000, "foo");
});

// Promise.all([p1, p2, p3])  // em all se ejecuat en paralelo si todas pasan van al then si cualquoera falla pasa al catch
//   .then((valores) => console.log("all", valores))
//   .catch((e) => console.log("error en all", e));

// Promise.race([p1, p2, p3]) //race espera que se resuelva la primera promesa apensa se resuelva cualquier se devuelve
//   .then((valores) => console.log("rece", valores))
//   .catch((e) => console.log("error en rece", e));

// Promise.any([p1, p2, p3]) //nos resuelve la primera promesa resuelta
//   .then((valores) => console.log({ valores }))
//   .catch((e) => console.log({ e }));

Promise.allSettled([p1, p2, p3]) //independiente de que las promesas sean aceptadas o rechasadas estas se envuelve en un objeto que contiene la propiedad de status y reason
  .then((valores) => console.log({ valores }))
  .catch((e) => console.log({ e }));
