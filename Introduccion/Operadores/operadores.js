// Propagacion
const arr1 = [1,2,3,4,5], arr2 = [6,7,8,9,10];
const arr3 = [...arr1,...arr2]; // [1,2,3,4,5,6,7,8,9,10]

// Cortocircuito
function saludar(nombre){
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}

saludar("Jhon");
saludar();
