const suma = (a, b, ...rest) => {
  // el rest siempre tiene que ir de ultimaS
  console.log(rest);
};

// suma(1, 2, 3, 4, 5, 6);

function logMsg(desc, ...msgs) {
  for (let msg of msgs) {
    console.log(desc, msg);
  }
}

let mensajes = ["Error:1", "peticion aceptada", "Error movil"];
logMsg("cliente movil:", ...mensajes, "otro mensaje"); // Esto es un spret operator
