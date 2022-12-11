const map1 = new Map();

map1.set('a',1);
map1.set('b',2);
map1.set('c',3);

// get: obtener valor
console.log(map1.get('a'));

// cambiar clave
map1.set('a',91);

// tamaño 
console.log(map1.size);

// has: encontrar una clave
console.log(map1.has('a'));
console.log(map1.has('xd'));

// delete: eliminar una clave
map1.delete('b');
console.log(map1.size);

// entries es el iterador que te devuelve key,valor usado en foreach
console.log(map1.entries());

// clear: limpiar map
// keys: devuelve llaves
console.log(map1.keys());
// values: devuelve valores

// iterando con for
console.log(map1.values());
for (const [key,value] of map1.entries()) {
  console.log(`${key} = ${value}`);
}

// iterando con foreach
map1.forEach((value,key) => {
  console.log(`${key} = ${value}`);  
});


