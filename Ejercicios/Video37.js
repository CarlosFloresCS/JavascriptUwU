// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
function esPrimo(input) {
  for (let index = 2; index < input; index++) {
    if (input % index === 0) return false;
  }
  return true;
}
let test12 = esPrimo(6);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
function esParOImpar(input) {
  return input % 2 === 0 ? "Par" : "Impar";
}
let test13 = esParOImpar(28);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
function CelsiusAFahrenheit(input, name) {
  if (name === "C") return (input * 1.8 + 32).toString() + "°F";
  else if (name === "F") return ((input - 32) / 1.8).toString() + "°C";
}
let test14 = CelsiusAFahrenheit(0,"C");


