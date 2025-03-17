const config = {
  url: "https://holamundo.io",
  direccion: {
    calle: "hola",
    numero: 12,
  },
};

// function webServer({ url }) {
//   // estamos haciendo lo mismo que dije abajo pero aca
//   // const { url } = conf; //lo que estamos haciendo es diciendo saca la propiedad url de la configuracion y crea una constante con el mismo nombre
//   return url;
// }

function webServer(config) {
  const { url, ...rest } = config;
  console.log(rest);
  return url;
}

console.log(webServer(config));
