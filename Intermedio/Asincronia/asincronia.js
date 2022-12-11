// Sincronico bloqueante
(() => {
  console.log("Código Síncrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin***********");
})();

// Asincrono no bloqueante
(() => {
  console.log("Código asíncrono");
  console.log("inicio");

  function dos() {
    setTimeout(() => {
      console.log("Dos");
    }, 1000);
  }

  function uno() {
    setTimeout(() => {
     console.log("Uno"); 
    }, 0);
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();
