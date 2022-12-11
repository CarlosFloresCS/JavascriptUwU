// Iterable
const iterable = [1,2,3,4,5];
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

let next = iterador.next();
while(!next.done) { // mientras next.done sea falso
  console.log(next.value);
  next = iterador.next(); 
}
