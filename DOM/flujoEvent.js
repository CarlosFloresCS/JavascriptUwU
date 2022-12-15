const $divEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(evento) {
  console.log(`Hola te saluda ${this.className}, el click lo origino ${evento.target.className}`);
  // Parar propagacion
  evento.stopPropagation();
}

// burbuja: del más interno al más extero
// captura: del más externo al más interno
$divEventos.forEach(div => {
  //burbuja, por defecto es falso
  //div.addEventListener("click",flujoEventos);
  //captura
  //div.addEventListener("click",flujoEventos,true);
  // de la misma manera pero con objeto
  div.addEventListener("click",flujoEventos,{
    capture: false, // de la misma manera false = burbuja y true = captura
    once: true, // true = solo ocurrira una sola vez el evento
  })
});

// Prevent default
$linkEventos.addEventListener("click", evento => {
  alert("Hola soy Carlos");
  evento.preventDefault(); // cancela la accion del elemento del evento. En caso de una referencia, ya no abrira la referencia.
});
