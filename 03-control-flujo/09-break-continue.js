// se puedes unsar con TODOS los loops que hemos visto hasta ahora

let i = 0;

while (i < 6) {
  i++;
  if (i === 2) {
    continue; // el continue lo que haces es cuando llega a este punto vuelve y hace un tipo de reinicio del
  }
  if (i === 4) {
    break; // lo que hace es cunado llegue a 4 se detiene la ejecucion de loop
  }
  consoile.log(i);
}
