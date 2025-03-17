//Declaracion de funciones: Fuction declaration.

//Funcion nombrada : Named function

function suma() {
  console.log("Sumando....");
}

//funciones anonimas : anonymous function , se usa cuando queremos ejecutar al intante la funcion

[].map(function () {
  console.log("fucion anonima");
});

//Expresion de funciones : function expression
//expresion de funcion anonima

const resta = function () {
  console.log("resta");
};

const multiplicar = function multi() {
  //named function expression
  console.log("multiplicar");
};

const divide = () => {
  //anonimo
  console.log("divide..");
};
