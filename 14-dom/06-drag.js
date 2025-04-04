let id;

function createDraggable() {
  let span = document.createElement("span");
  span.id = "hola-mundo";
  span.innerText = "arrastrable";
  span.draggable = true;

  span.ondragstart = (e) => {
    id = e.target.id;
  };

  return span;
}

function createDraggableArea() {
  let dropArea = document.createElement("div");
  dropArea.className = "drop";

  dropArea.ondragenter = (e) => {
    e.target.style.background = "yellow";
  };

  dropArea.ondragleave = (e) => {
    e.target.style.background = "";
  };

  dropArea.ondragover = (e) => e.preventDefault();

  dropArea.ondrop = (e) => {
    e.target.appendChild(document.getElementById(id));
  };

  return dropArea;
}

let draggable = createDraggable();
let dropArea1 = createDraggableArea();
let dropArea2 = createDraggableArea();
document.body.append(dropArea1);
document.body.append(dropArea2);
document.body.append(draggable);
