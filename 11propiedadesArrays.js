var dias = [10,20,30,40,50];

//longitud del array
console.log(dias.length);

//añadir valores al array
console.log(dias.push(60));

//devolverme el ultimo valor del array
console.log(dias.pop());

//convertir array en una unica cadena de string
dias.join();

var letras = ["z","c","b","a","d"];
//devuelve el valor en orden alfabetico
console.log(letras.sort());

//devuelve al contrario del orden alfabetico
console.log(letras.reverse());

//recorrer el array entero, aqui podemos introducir logica en funcion de lo que queramos
for(var i in letras){
    console.log(letras);
}
//esto es otra manera de reccorer un array
letras.forEach(
    (dos,i) => console.log(dos+" => "+i)
);

//le indico que quiero que me busque entre todos los index uno que contenga z, en caso de no encontrarlo me devuelve undefined
var buscar = letras.find(contenidoArray => contenidoArray == "z" );
console.log(buscar);

//me indica el index de donde se encuentra la z
var buscar = letras.findIndex(contenidoArray => contenidoArray == "z" );
console.log(buscar);

//devuelve todos los valores que contengan la z
var buscar = letras.filter(contenidoArray => contenidoArray == "z" );
console.log(buscar);

//me indica (booleano) si se encuentran valores inferiores a 30
var buscar = dias.some(contenidoArray => contenidoArray =>dos<30 );
console.log(buscar);