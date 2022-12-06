// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
function alReves(input) {
  return input.split("").reverse().join("");
}
let test5 = alReves("Hola Mundo");

// 6) Programa una función para contar el número de veces que se repite una palabra
//    en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
function foundText(input, search) {
  let output = [...input.matchAll(search)];
  return output.length;
}
let test6 = foundText("hola mundo adios mundo", "mundo");

// 7) Programa una función que valide si una palabra o frase dada,
//    es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function isPalindromo(input) {
  let inputAlReves = alReves(input.toLowerCase());
  return input.toLowerCase() === inputAlReves ? true : false;
}
let test7 = isPalindromo("Salas");

// 8) Programa una función que elimine cierto patrón de caracteres de un 
//    texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
function replaceText(input,replace){
    return input.replaceAll("xyz",'');
}
let test8 = replaceText("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
