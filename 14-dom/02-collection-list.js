let collection = document.getElementsByTagName("p");
let list = document.querySelectorAll("p");

console.log(collection, list);

// let item1 = collection.namedItem("chanchito");
// let item2 = collection.item("chanchito");
// let item3 = collection[3];

//iterar elementos
// for (let el of collection) console.log(el);

// Array.from(collection).forEach((x) => console.log(x));
// [...collection].forEach((x) => console.log(x));

// nodelist

// let item = list.item[3];
// let item2 = list.item(3);

list.forEach((x) => console.log(x));

//entries, Keys y values 

