let set = new Set([1,2,3,4,5,true,false,false,{},{},"hola","H0la"]);
let set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);
console.log("-----------------------");
// Recorrido del set1
for (item of set) {
  console.log(item);
}

console.log("----------------------");

// Recorrido del set2
set2.forEach(item => {
  console.log(item);
});

console.log("-----------------------");

// Convertir set a un array para poder ir a un lugar en especifico
let arr = Array.from(set);
console.log(arr[0]);

console.log("-----------------------");

// Eliminar
set.delete("H0la");
console.log(set);

console.log("-----------------------");

// Encontrar datos
console.log(set.has("hola"));
console.log(set.has(19));

console.log("-----------------------");

// Limpiar set
set2.clear();
console.log(set2);

console.log("-----------------------");

