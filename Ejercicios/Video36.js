// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
function numRandom() {
  return Math.floor(Math.random() * (600 - 501 + 1) + 501);
}
let test9 = numRandom();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
function alReves(input) {
  return input.split("").reverse().join("");
}
function capicua(input) {
  return input.toString() === alReves(input.toString()) ? true : false;
}
let test10 = capicua(2002);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
//     se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
function factorial(input) {
  return input === 1 ? 1 : input * factorial(input - 1);
}
let test11 = factorial(5);