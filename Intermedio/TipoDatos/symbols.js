// Symbol
let id = Symbol();
let id2 = Symbol();

console.log(id == id2);

const NOMBRE = Symbol();
const PERSONA = {
  [NOMBRE]: "Jhon"
}

console.log(PERSONA);

PERSONA.NOMBRE = "Carlos";

console.log(PERSONA.NOMBRE);
console.log(PERSONA[NOMBRE]);

const SALUDAR = Symbol();
PERSONA[SALUDAR] = function () {
  console.log(`Hola`);
}

PERSONA[SALUDAR]();

console.log(Object.getOwnPropertySymbols(PERSONA));
