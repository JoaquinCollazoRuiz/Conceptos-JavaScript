function gato(nombre,edad,peso){

    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;

    this.correr = function(){
        console.log("El gato",nombre,"esta corriendo");
    }
}

var gato1 = new gato("Peludo",4,3);
var gato2 = new gato("Manchas",1,3);

console.log(gato1.nombre);

console.log(gato2.correr());