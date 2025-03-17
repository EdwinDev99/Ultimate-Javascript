let el = document.createElement("p");

// el.innerHTML = "elemento Creado";
el.innerHTML = "elemento creado2";

document.body.append(el);

el.innerHTML = "<ul><li>hola mungo</li></ul>";

el.style = "background-color:red; font-weight: bold;";
el.className = "parrafo";
el.id = "mi-parrafo";
