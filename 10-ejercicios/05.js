function ordernar(texto, fn) {
  let resultado = texto
    .toLowerCase() //todas minusculas
    .split("") //separamos por un stringf bacio
    .filter((letra) => letra !== " ") //filtras las letras que sean distintas a espacio
    .sort() //ordenar todas las letras
    .join(); //juntar las letras
  fn(resultado);
}

ordernar("hola mundo", console.log);
