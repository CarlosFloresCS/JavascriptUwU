let aleatorio = Math.round(Math.random()*100 + 5);

const objUsuarios = {
  propiedad: "Valor",
  [`id_${aleatorio}`] : "Valor aleatorio"
};
console.log(objUsuarios);

const usuarios = ["Jon","Irma","Kala","KenAi"];
usuarios.forEach((usuario,index) => {
  objUsuarios[`id_${index}`] = usuario;
});

console.log(objUsuarios);
