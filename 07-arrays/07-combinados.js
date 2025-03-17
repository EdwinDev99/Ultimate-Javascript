let arr1 = [1, 2];
let arr2 = [3, 4];

let combinados = arr1.concat(arr2);
// console.log(combinados, arr1, arr2);

// let divididos = combinados.slice(1, 3);//dividimos desde el indice 1 al indice 3
// let divididos = combinados.slice(1); //a partir del indice hasta el final
let divididos = combinados.slice(); // crea una copia! por referencia!
console.log(divididos);
