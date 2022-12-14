// insertAdjacent:
// .insertAdjacentElement(position, element)
// .insertAdjacentHTML(position, html)
// .insertAdjacentText(position,text)
//
// Posiciones:
// beforebegin(hermano anterior)
// afterbegin (primer hijo)
// beforeend (ultimo hijo)
// afterend (hermano siguiente)

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

//$newCard.innerHTML = `
//  <img src="https://placeimg.com/200/200/any" alt="Any">
//  <figcaption>Any<figcaption>
//`;

let $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption><figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
$cards.insertAdjacentElement("afterbegin",$newCard);

//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
//$cards.after($newCard);
