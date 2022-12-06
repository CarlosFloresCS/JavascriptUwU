// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function countCaracteres(input) {
  return input.length;
}
let test1 = countCaracteres("Hola Mundo");

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function sliceCaracter(input, limit) {
  return input.slice(0,limit);
}
let test2 = sliceCaracter("Hola Mundo", 4);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por
//    cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function textSeparator(input, separator) {
  return input.split(separator);
}
let test3 = textSeparator("hola que tal", " ");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function loop(input, count) {
  let output = "";
  for (let index = 0; index < count; index++) {
    if (index == count) output += input;
    output = output + " " + input;
  }
  return output;
}
let test4 = loop("Hola mundo", 3);