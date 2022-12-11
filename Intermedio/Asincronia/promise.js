// Promesa solucion con promesas
function cuadradoPromise(value) {
  if (typeof value !== "number") 
    return Promise.reject("Valor ingresado no es numero");
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({
        value, //value=value,
        result: value*value
      });
    }, 0 | Math.random()*1000 );
  });
}

cuadradoPromise(0)
  .then(objeto => {
    console.log("Inicio promise");
    console.log(`Promise: ${objeto.value}, ${objeto.result}`);
    return cuadradoPromise(1);
  })
  .then(objeto => {
    console.log(`Promise: ${objeto.value}, ${objeto.result}`);
    return cuadradoPromise(2);
  }) 
  .then(objeto => {
    console.log(`Promise: ${objeto.value}, ${objeto.result}`);
    return cuadradoPromise(3);
  })  
  .then(objeto => {
    console.log(`Promise: ${objeto.value}, ${objeto.result}`);
    return cuadradoPromise(4);
  })
  .then(objeto => {
    console.log(`Promise: ${objeto.value}, ${objeto.result}`);
// Promesa solucion con promesas
function cuadradoPromise(value) {
  if (typeof value !== "number") 
    return Promise.reject("Valor ingresado no es numero");
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({
        value, //value=value,
        result: value*value
      });
    }, 0 | Math.random()*1000 );
  });
}

cuadradoPromise(0)
  .then(objeto => {
    console.log("Inicio promise");
    console.log(`Promise: ${objeto.value}, ${objeto.result}`);
    return cuadradoPromise(1);
  })
  .then(objeto => {
    console.log(`Promise: ${objeto.value}, ${objeto.result}`);
    return cuadradoPromise(2);
  }) 
  .then(objeto => {
    console.log(`Promise: ${objeto.value}, ${objeto.result}`);
    return cuadradoPromise(3);
  })  
  .then(objeto => {
    console.log(`Promise: ${objeto.value}, ${objeto.result}`);
    return cuadradoPromise(4);
  })
  .then(objeto => {
    console.log(`Promise: ${objeto.value}, ${objeto.result}`);
    console.log("Fin promise");
  })
  .catch(err => console.log(err));
    console.log("Fin promise");
  })
  .catch(err => console.log(err));

export {cuadradoPromise};
