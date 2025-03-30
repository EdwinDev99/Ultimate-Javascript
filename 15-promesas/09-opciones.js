const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url, {
  method: "POST", //PUT,PATCH,DELETE, GET
  body: JSON.stringify({ title: "hola mundo" }), // en formato de Json
  // headers: esta nos sirve para enviar nuestras credeciales al servidor y tambien para decirle al servidor que los datos que le estamos enviado al servidor sond atos tipo Json
  headers: {
    "Content-Type": "application/json",
    Autorization: "apy key",
  },
  cache: "no-cache", // default,reload, force-cache,only-if-cache => elegimos esta para anular el cache
})
  .then((response) => {
    if (response.ok) {
      // return response.json();
      return response.text();
    }
    return Promise.reject(response.status);
  })
  .then((data) => console.log(data))
  .catch((message) => console.log({ message }));
