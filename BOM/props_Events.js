window.addEventListener("resize", evento => {
  console.clear();
  console.log("**********Evento Resize**********")
  console.log(window.innerWidth); // tamaño del ancho del viewport de la ventana
  console.log(window.innerHeight); // tamaño del largo del viewport de la ventana
  console.log(window.outerWidth); // tamaño del ancho de la pantalla
  console.log(window.outerHeight); // tamaño del largo de la pantalla
});

window.addEventListener("scroll", evento => {
  console.clear();
  console.log("**********Evento Scroll**********");
  console.log(window.scrollX);
  console.log(window.scrollY);
});

window.addEventListener("load", evento => {
  console.log("**********Evento Load**********");
  console.log(window.screenX);
  console.log(window.screenY);
});

// DOMContentLoaded es más rápido que Loa
document.addEventListener("DOMContentLoaded", evento => {
  console.log("**********Evento DOMContentLoaded**********");
  console.log(window.screenX);
  console.log(window.screenY);
});
