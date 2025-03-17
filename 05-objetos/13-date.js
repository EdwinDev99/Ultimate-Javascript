// nos sirve para manejar fechas y horas
const ahora = new Date();
//console.log(ahora);
const fecha = new Date("December 11 1986 14:15 GMT-0300");
//console.log(fecha)
//diia mes ano

const fecha2 = new Date(1986, 11, 25, 14, 15);
const fecha3 = new Date(1986, 11, 25, 14 + 15, 15); //diferencia horarias
// console.log(fecha2);

console.log("datestring", fecha3.toDateString());
console.log("ISOstring", fecha3.toISOString()); // esta esa la forma correcta de envia fecha cliente servidor
console.log("timestring", fecha3.toTimeString());

// con el metodo get podemos obtener inf (date,day,fullyear,hours,miilliscons...etc)

console.log(fecha2.getHours());

// y con el metodo set podemos cambiar la informacion

fecha3.setFullYear(1999);
console.log(fecha3);
