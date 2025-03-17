//parametros predeterminados

/**
 * {
 * url:..
 * bucket:amazon S3
 * port:80
 * }
 */

const consf = {
  url: "http://holamundo.io",
};

function configurarApi(url, bucket = 145, port = 80) {
  //si le asignamos por defecto un valor a un parametro todos los demas a la derecha deverian tener un valor por defecto
  return `${url}/${bucket}:${port}`;
}

// console.log(configurarApi());
console.log(configurarApi("holamundo.io"));
