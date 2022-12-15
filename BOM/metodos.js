const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

// para el btnCerrar
let ventana;

$btnAbrir.addEventListener("click", evento => {
  ventana = window.open("https://jonmircha.com"); // no es necesario poner window
});
$btnCerrar.addEventListener("click", evento => {
  //window.close(); cierra la misma ventana
  ventana.close();
});
$btnImprimir.addEventListener("click", evento => {
  window.print();
});
