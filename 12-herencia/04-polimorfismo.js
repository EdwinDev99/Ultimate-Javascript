//pili de mucho morfismo de formas
//es cuando muchos objetos quer se crearon de propiedades distintas o
//funciones constructoras distintas todas comparten un mismo metodo

function Select() {}

Select.prototype.render = function () {
  console.log("renderizado select");
};

function Checkbox() {}

Checkbox.prototype.render = function () {
  console.log("renderizado select");
};

const componentes = [new Select(), new Checkbox()];

componentes.forEach((c) => c.render());
