const letras = ["a", "b", "c"];

//agregar al final
letras.push("d", "f");

//agregar al comienzo

letras.unshift("y", "z");

//entre el array el primer indice es donde queremos agregar el segundo es la cantidad que quermos eliminar y depues lo que queremos agregar

letras.splice(3, 0, 1, 2);

console.log(letras);
