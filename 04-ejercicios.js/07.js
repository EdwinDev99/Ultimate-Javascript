/**
 * crea un algoritmo que devuelva
 * el precio del producto
 * mas el impuesto.
 */

function impuestoCompleto(precio, impuesto) {
  return precio + precio * impuesto;
}

let resultado = impuestoCompleto(19.99, 0.15);
console.log(resultado);
