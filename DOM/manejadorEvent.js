function holaMundo() {
  alert("Hola Mundo");
}

// Evento semántico, desventaja: solo puede manejar un evento
const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = () => {
  alert("Hola Mundo Manejador de Eventos Semántico");
}

// Evento múltiple
const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(evento) => {
  alert("Hola Mundo Manejador de Eventos Múltiple");
});

// Evento con parámetro

function saludar(nombre="Desconocid@"){
  alert(`Hola ${nombre}`);
}

$eventoMultiple.addEventListener("click",() => {
  saludar();
  saludar("Carlos");
});

// Remover eventos,  solo funciona con evento multiple
$eventoRemover = document.getElementById("evento-remover");

const removerDoubleClick = (evento) => {
  alert(`Removiendo el elevneto de tipo ${evento.type}`);  
  $eventoRemover.removeEventListener("dblclick",removerDoubleClick);
  $eventoRemover.disabled = true; // para que se desactive
};

// tenemos que mandarlo como funcion a la hora de remover eventos
$eventoRemover.addEventListener("dblclick",removerDoubleClick);
