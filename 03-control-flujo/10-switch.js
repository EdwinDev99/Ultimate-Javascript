let accion = "listar";

switch (accion) {
  case "listar":
    console.log("accion de listar");
    break; //en este caso siempre tiene que terner el break por que si no va a continuar sin importar que la condicion se cumpla o no !
  case "guardar":
    console.log("accion de guardar");
    break;
  default:
    console.log("Accion  no reconocida"); // en caso de no concidir con nada el default se ejecutara.
}
