let afuera = "estoy a fuera";

function alcance() {
  afuera = "estoy dentro"; // pero si podemos llavar variables que esta afuera
  function saludo() {}
  var vieja = "ya no usar"; // las variables que se encuentran entro de la funcion puede usarse
  let variable = "Hola mundo"; //solo dentro de la funcion
  const coinstante = "hola mundo2";
}

console.log(afuera); //imprime "estoy afuera " por que no se ha ejecutado la funcion
alcance(); //se ejecuta la funcion
console.log(afuera); // se imprime "estoy dentro " por que ya se ejucuto la funcion
