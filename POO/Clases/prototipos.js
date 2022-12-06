// Prototipo
function Animal(nombre,genero){
    // Atributos
    this.nombre = nombre;
    this.genero = genero;

    this.sonar = (() => console.log("Hago sonidos porque estoy vivo"));
    this.saludar = (() => console.log(`Hola me llamo ${this.nombre}`));
}

// Herencia prototípica
function Perro(nombre,genero,tamanio){
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
}

// Perro está heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescritura de sonar
Perro.prototype.sonar = (() => console.log("Soy un perro y mi sonido es un ladrido"));
Perro.prototype.ladrar = (() => console.log("Guaaa guaaa"));
const snoopy = new Perro("snoopy","macho","Medio");

console.log(snoopy.ladrar());