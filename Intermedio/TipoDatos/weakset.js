// WeakSet
const weakset = new WeakSet();

let valor1= {"valor1":1};
let valor2= {"valor2":2};
let valor3= {"valor3":3};

//add
weakset.add(valor1);
weakset.add(valor2);

console.log(weakset);

//has
console.log(weakset.has(valor1));
console.log(weakset.has(valor3));

//delete
weakset.delete(valor2);
weakset.add(valor2);
weakset.add(valor3);

// demostrando limpieza automatica
setInterval(() => {
  console.log(weakset);
}, 1000);

setTimeout(() => {
  valor1 = null;
  valor2 = null;
  valor3 = null;
}, 5000);
