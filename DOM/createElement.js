// Primera forma

const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards");


$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.appendChild($img);
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText); 
$figure.appendChild($figcaption);

$cards.appendChild($figure);

// Segunda forma

const $figure2 = document.createElement("figure");

$figure2.innerHTML = `<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

// Pero estas formas seria de agregar uno a uno. Usemos for

const estaciones = ["Primavera", "Verano","Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(element => {
  const $li = document.createElement("li");
  $li.textContent = element;
  $ul.appendChild($li);
});

// ----  Otra forma

const continentes = ["África", "América", "Asia","Europa","Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";
continentes.forEach(element => {
  $ul2.innerHTML += `<li>${element}</li>`;
});

// Pero entre todo, es mejor usando Fragmentos ya que envés de ir agregando de 1 a 1 mejor agreguemos todo de uno.

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach(element => {
  const $li = document.createElement("li");
  $li.textContent = element;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
