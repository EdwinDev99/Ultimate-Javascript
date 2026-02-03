//false
//0
//''
//null
//undefined
//Nan

let nombre = "";
let userName = nombre || "anonimo"; //retorna anonimo por que nombre esta vacio (false)
console.log(userName);

function fn1() {
  console.log("soy funcion 1");
  return false;
}

function fn2() {
  console.log("soy funcion 2 ");
  return true;
}

let x = fn1() && fn2(); //solo va a aprecer la segunda por que esta en true
