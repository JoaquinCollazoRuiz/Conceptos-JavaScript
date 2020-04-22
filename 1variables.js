//Tipos de variables
console.log("Tipos de variables:")

//Number
var numero = 123;
var numer2 = 1.3;
console.log(typeof(numero));

//String
var letras = "ABC";
console.log(typeof(letras));

//Object
var fecha = new Date();
console.log(typeof(fecha));

//Boolean
var visto = true;
console.log(typeof(visto));

console.log("Acceder a elementos de un objeto:");
//Dia del mes
console.log(fecha.getDate());
//Numero de la semana
console.log(fecha.getDay());
//Hora 
console.log(fecha.getHours());
//Minutos 
console.log(fecha.getMinutes());
//Hora exacta
console.log(fecha.getHours() + " : " + fecha.getMinutes());