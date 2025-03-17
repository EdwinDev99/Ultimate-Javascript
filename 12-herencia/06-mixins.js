function mixin(Ctr, ...arg) {
  Object.assign(Ctr.prototype, ...arg);
}

let vuela = {
  vuela() {
    console.log("volando");
  },
};

let camina = {
  camina() {
    console.log("caminandpo");
  },
};

let bano = {
  bano() {
    console.log("ir al bano");
  },
};
let nada = {
  nada() {
    console.log("nadando");
  },
};

//vuela camina nada y va al bano
function Pato() {}
mixin(Pato, nada, vuela, camina, bano);
//camina ,nada va al bano
function Perro() {}
mixin(Perro, camina, bano);
// nada va al bano
function Pez() {}
mixin(Pez, nada, bano);
//vuela pero no nada, ni va al bano
function Avion() {}
mixin(Avion, vuela);