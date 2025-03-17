// Todo lo que asignemos a la palabra reservada this va hacer publico

function Usuario() {
  let id = 1;
  this.name = "nicolas";

  let log = function () {
    console.log("loggin..."); //las privadas para no acceder desde a fuera las guardamos en una variable puede ser let o const
  };

  this.guardar = function () {
    log();
    console.log("guardando....");
  };
}

const usuario = new Usuario();
usuario.guardar();
