this.lugar = "Contexto Global";

function saludar(saludo,aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("Hola","Carlos");

const obj = {
  lugar: "Contexto Objeto"
}

saludar.call(obj,"Hola","Carlos2");
saludar.apply(obj,["Adios","Carlos3"]);
saludar.call(null,"a","b");// de igual manera funciona con apply
saludar.call(this,"a","B");// de igual manera funciona con apply

this.nombre = "Window"

const persona = {
  nombre: "Jon",
  saludar: function () {
    console.log(`Hola ${this.nombre}`)
  }
}

persona.saludar();

const otrapersona = {
  saludar: persona.saludar.bind(persona)
}

otrapersona.saludar();
