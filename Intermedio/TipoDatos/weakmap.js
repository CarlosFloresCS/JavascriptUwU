const weakmap = new WeakMap();
let llave1 ={};
let llave2 ={};
let llave3 ={};

// set
weakmap.set(llave1,1);
weakmap.set(llave2,2);
console.log(weakmap);

//has
console.log(weakmap.has(llave1));
console.log(weakmap.has(llave3));

//get
console.log(weakmap.get(llave1));
console.log(weakmap.get(llave2));

//delete
weakmap.delete(llave2);

weakmap.set(llave2,2);
weakmap.set(llave3,3);

setInterval(() => {
  console.log(weakmap);
}, 1000);

setTimeout(() => {
  llave1 = null;
  llave2 = null;
  llave3 = null;
}, 5000);
