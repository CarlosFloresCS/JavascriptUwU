// Template es como una plantilla la cual creamos en HTML pero esta no se renderiza  en el DOM, luego de referenciarla usando JS  podemos modificarla dinamicamente, clonarla, colocarla en un  fragmento y agregar eso a nuestro DOM.

const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnologia",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach(element => {
  $template.querySelector("img").setAttribute("src",element.img);
  $template.querySelector("img").setAttribute("alt",element.title);
  $template.querySelector("figcaption").textContent = element.title;

  let $clone = document.importNode($template,true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
