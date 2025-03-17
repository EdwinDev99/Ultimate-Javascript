// map se utiliza mucho paar crear nuevos array apartir de otro

let usuarios = [
  { edad: 15, nombre: "edwin" },
  { edad: 18, nombre: "andres" },
  { edad: 24, nombre: "chancho" },
  { edad: 30, nombre: "nicolas" },
];

const lista = usuarios
  .filter((u) => u.edad > 17)
  .map((u) => `<li>${u.nombre}</li?>`);
const html = `<ol>${lista.join("")}</ol>`;

console.log(lista);

// const mapped = usuarios.map((u) => {
//   return {
//     ...u,
//     mayor: u.edad > 17,
//   };
// });

// console.log(mapped);

let count = 0;  // Inicializamos un contador para contar los pares encontrados

// Iteramos sobre el array 'a' desde el primer elemento hasta el penúltimo
for (let i = 0; i < n - 1; ++i) {
    // Iteramos sobre el array 'a' desde el siguiente elemento después de 'i' hasta el último elemento
    for (let j = i + 1; j < n; ++j) {
        // Verificamos si la suma de los elementos en las posiciones 'i' y 'j' es divisible por 'k'
        if ((a[i] + a[j]) % k === 0) {
            // Si la suma es divisible por 'k', incrementamos el contador 'count'
            ++count;
        }
    }
}

// Imprimimos el valor de 'count', que representa el número de pares encontrados
console.log(count);