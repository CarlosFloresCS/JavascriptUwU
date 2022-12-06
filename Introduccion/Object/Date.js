console.log(Date()); //Tue Dec 06 2022 01:57:03 GMT-0500 (hora estándar de Perú)

let fecha = new Date();
// dia del mes
console.log(fecha.getDate()); // 6
// Dia de la semana D L M MI J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay());  // 2
// mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset()); // uso horario en el que nos encontramos
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());