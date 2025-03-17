Object.prototype.isEqual = function (obj) {
  //....
};

let x = {};
x.isEqual({ a: 1 });

//trartar de no extender las fucnciones constructoras por que pueden traerr problemas a futuro
