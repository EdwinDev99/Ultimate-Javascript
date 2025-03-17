//fat arrow function
//no tienen Argumentos
//Ni super Ni this

const suma = (a, b) => {
  return Array.from(arguments).reduce((acc, el) => acc + el); //si al metodo reduce no le pasamoe le valor inicial va a tomar el primer elemeto como su valor inicial

  // let total = 0;
  // for (let valor of arguments) {
  //   // total = total + valor
  //   total += valor; // mas corto
  // }
  // return total;
};

consolelog(suma(1, 2, 3, 4));
