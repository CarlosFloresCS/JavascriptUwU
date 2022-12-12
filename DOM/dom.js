// Selectores y Elemento
console.log(document.getElementById("menu")); 

console.log(document.querySelector("#menu")); // es más lento que getElementById porque analiza si es un id, clase, etiqueta html.

console.log(document.querySelectorAll("a")); // viene a remplazar los elementos TagName,ClassName y ByName.
document.querySelectorAll("a").forEach(element => {
  console.log(element);
});

console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);

console.log(document.querySelectorAll("#menu li"));

console.log("-----------------------------------");
// Atributos y data-Attributes
// . o getAttribute parecen igual pero:
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href); // este te trae lo que apunta el href
console.log(document.querySelector(".link-dom").getAttribute("href")); // este te trae lo que esta en el href

// Como dar nuevos valores a los atributos
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-PE");
console.log(document.documentElement.getAttribute("lang"));

// Guardar en variables nuestros elementos del DOM y cambiar sus atributos
const $linkDOM = document.querySelector(".link-dom");
//console.log($linkDOM);
$linkDOM.setAttribute("target","_blank"); // hace que la pestaña envés de refrescarse, abra otra pestaña
$linkDOM.setAttribute("rel","noopener"); // evitar pestañas inseguras, significa que no hay dependencia entre la ventana que estamos abriendo y la ventana origen
$linkDOM.setAttribute("href","https://youtube.com/jonmircha");

// verificando que tenga cierto atributo
console.log($linkDOM.hasAttribute("rel"));

$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// Trabajar con los Data-Attribute el . o con getAttribute
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset.description);
console.log($linkDOM.dataset);

$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "CarlosFlores";
console.log($linkDOM.dataset.description);

console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));
