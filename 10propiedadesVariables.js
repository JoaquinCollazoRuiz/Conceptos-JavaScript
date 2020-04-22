var a = [1,2,3,2];
var letras = ["A","B","C"];
var frase = "HOLA QUE HACES COMO TE ENCUENTRAS ESPERO QUE TE ENCUENTRES MUY BIEN";

//longitud array
console.log(a.length);

//donde se encuentra el primer valor 2
console.log(a.indexOf(2));

//donde se encuentra el ultimo valor 2
console.log(a.lastIndexOf(2));

//me indica el indice donde se encuentra
console.log(frase.match(/TE/gi));

//me regresa solo lo que se encuentra entre esos indices
console.log(frase.substr(4,12));

//me muestra lo que se encuentra en ese índice pero empezando desde el principio, no como el anterior
console.log(frase.substring(20));

//me devuelve el caracter 7 del string de frase
console.log(frase.charAt(7));

//me devuelve un booleano diciendome is empieza o no por esos caracteres
console.log(frase.startsWith("HOLA"));

//me devuelve un booleano diciendome is termina o no por esos caracteres
console.log(frase.endsWith("BIEN"));

//me dice si contiene o no ese caracter
console.log(frase.includes("joaquin"));

//me dice si encuentra eso a partir del caracter 30
console.log(frase.includes("TE", 30));

//me repite 3 veces el string
console.log(frase.repeat(3));

//sustituyo los caracteres por otros
console.log(frase.replace("TE", ""));

//ignora todo lo anterior al caracter 10
console.log(frase.slice(10));

var texto = "HOLA,QUE,TAL,COMO";
//convierte string en array , lo que hacemos poniendo la coma es que nos genere los index del array por cada ,
texto.split(",");

//convierte mi string todo en minusculas
console.log(frase.toLowerCase());

//convierte mi string todo en mayuscula
console.log(frase.toUpperCase());

//fusionar varias variables en una, pero no se actualiza el valor en la variable
var nombre = "joaquin "
var apellido = "collazo "
var genero = "masculino"

console.log(nombre.concat(apellido,genero));
console.log(nombre)
