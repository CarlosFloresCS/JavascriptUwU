//const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(evento) {
  console.log(`Hola te saluda ${this}, el click lo originó ${evento.target.className}`);
}

document.addEventListener("click", evento => {
  console.log("Click en ",evento.target);

  if (evento.target.matches(".eventos-flujo div")){
    flujoEventos(evento);
  }

  if (evento.target.matches(".eventos-flujo a")){
    alert("Hola soy Carlos");
    evento.preventDefault();
    
  }
});
//$divsEventos.forEach(div => {
//  div.addEventListener("click",flujoEventos);
//});

//$linkEventos.addEventListener("click", evento =>{
//  alert("Hola soy Carlos");
//  evento.preventDefault();
//  evento.stopPropagation()
//});
