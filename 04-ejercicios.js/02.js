function nombreResolucion(ancho, alto) {
  if (ancho >= 7680 && alto >= 4320) {
    return "8K";
  } else if (ancho >= 3840 && alto >= 2160) {
    return "4K";
  } else if (ancho >= 2560 && alto >= 1440) {
    return "QHDG";
  } else if (ancho >= 1920 && alto >= 1080) {
    return "HD";
  } else if (ancho >= 1280 && alto >= 720) {
    return "720p";
  } else {
    return false;
  }
}

let nombre = nombreResolucion(1920, 1090);
console.log(nombre);
