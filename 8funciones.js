//FUNCION 1
function prueba(){

    var uno = 1;
    if (uno == 1){console.log("Valor de uno es ->  " + uno )}
};

prueba();

//FUNCION 2
function nombre(nombre, apellido){

    if (nombre == null || apellido == null)
    {
        console.log("Introduce tu nombre y apellidos");
    }else{
        console.log("Me llamo " + nombre + apellido);
    }
}

nombre(nombre = "Joaquin ", apellido = "Collazo");

//FUNCION 3
function contenedor(...meses){
    console.log(meses);
}
contenedor("Enero", "Febrero", "Marzo", "Abril");

//FUNCION 4
function producto(nombr, precio, tipo ){
    console.log("El producto es -> "+ nombr + " " + precio + " " + tipo);
}
var juguete = ["Coche", 6, "juguete"];
console.log(juguete.length);
producto(...juguete);

//FUNCION 5
//Esto y *** es lo mismo
function asignar(algo){
    return algo;
}
//***
var asignacion = algo => "A";
console.log(asignacion);

//FUNCION 6
var tiempo = setInterval(
    function(){
        console.log("Intervalo de tiempo en segundos")
    }, 2000
);

//FUNCION 7 
setTimeout(
    function(){
        console.log("Han pasado 10 segundos desde la ejecucion");
    }, 10000
);