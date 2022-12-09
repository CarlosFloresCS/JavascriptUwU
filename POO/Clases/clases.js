// Declaración de clases
class rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}

// Alojamiento
const p = class rectangulo {};

// Expresiones de clases
// Anonima
let RectanguloAnonima = class {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}; //console.log(RectanguloAnonima.name);

// Nombrada
let RectanguloNombrada = class Rectangulo2 {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}; //console.log(RectanguloNombrada.name);

// Métodos prototipo
class RectanguloPrototipo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // getter
  get area() {
    return this.calcArea();
  }

  // Método
  calcArea() {
    return this.alto * this.ancho;
  }
}
const cuadrado = new RectanguloPrototipo(10, 10); //console.log(cuadrado.calcArea());

// Métodos estáticos
class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distancia(a,b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx*dx + dy*dy);
  }
}

const p1 = new Punto(5,5);
const p2 = new Punto(10,10);//console.log(Punto.distancia(p1,p2));

// Extends
class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    hablar() {
        console.log(this.nombre + " hace ruido.");
    }
}

class Perro extends Animal {
    hablar() {
        console.log(this.nombre + " ladra.");
    }
}
var perro = new Perro("pitbull"); //perro.hablar();

// Especies
class MyArray extends Array {
    static get [Symbol.species]() {return Array;}
}
var a = new MyArray(1,2,3);
var mapped = a.map((x) => x*x);
//console.log(mapped instanceof MyArray);
//console.log(mapped instanceof Array);

// Super
class Gato {
    constructor(nombre){
        this.nombre = nombre;
    }
    hablar() {
        console.log(this.nombre + " hace ruido.");
    }
}
class Leon extends Gato{
    hablar() {
        super.hablar();
        console.log(this.nombre + " maulla.");
    }
}
var leon = new Leon("leonsinio");//leon.hablar();

// Mix-ins
var calculatorMixin = Base => class extends Base {
    cal() {}
}
var randomizerMixin = Base => class extends Base {
    randomize() {}
}
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
