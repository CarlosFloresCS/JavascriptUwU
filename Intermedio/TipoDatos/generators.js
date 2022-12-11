// Sirve para volver iterable una función.
function* iterable() {
  yield "hola";
  console.log("Hola consola");
  yield "hola2";
  console.log("Seguimos con más instrucciones de nuestro código");
  yield "hola3";
  yield "hola4";
}

let iterador = iterable();

// recorriendo la funcion generador
for (let y of iterador) {
  console.log(y);
}

// guardnado en un arreglo
const arr = [...iterable()];
console.log(arr);

// ejercicio de elevacion al cuadrado con generators
function cuadrado(value){
  setTimeout(() => {
    return console.log({value,result:value*value});
  }, Math.random()*1000);
}

function* generador(){
  console.log("Inicia generator");
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  console.log("Termina generator");
}

let gen = generador();

for (let y of gen) {
  console.log(y);
}
