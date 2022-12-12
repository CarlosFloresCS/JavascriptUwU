this.nombre = "Contexto Global";
console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}

const obj = {
  nombre: "Contacto objeto",
  imprimir: function () {
    console.log(this.nombre);
  }
}
obj.imprimir();

const obj2 = {
  nombre: "Contexto objeto 2",
  imprimir
}
obj2.imprimir();

const obj3 = {
  nombre: "Contexto Objeto 3",
  imprimir: () => {
    console.log(this.nombre);
  }
}
obj3.imprimir();

function Persona (nombre) {
  this.nombre = nombre;
  return () => console.log(this.nombre);
}

let jon = new Persona("Jon");
jon();
