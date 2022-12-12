const persona = {
  nombre: "",
  apellido: "",
  edad: 0
}

const manejador = {
  set(obj,prop,valor) {
    if (Object.keys(obj).indexOf(prop) === -1){
      return console.error(`La propiedad "${prop}" no existe en el objeto persona`);
    }
    if (prop === "nombre" || prop === "apellido") {
      return console.error("Solo acepta letras");
    }
    obj[prop] = valor;
  }
}

const jon = new Proxy(persona,manejador);
jon.nombre = "Jon";
jon.apellido = "MirCha";
jon.edad = 35;
jon.twitter = "@jonmircha";
console.log(jon);
console.log(persona);
