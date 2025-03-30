let arra1 = [1, 2];
let arr2 = [5, 6];

let arr3 = [0, ...arra1, 1, 2, ...arr2, 8]; //unimos
let arr4 = [...arr3]; //hacemo una copia
arr3.pop(); //le quitamos el 8

console.log(arr3, arr4);
