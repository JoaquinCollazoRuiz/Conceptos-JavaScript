class Animal{
    constructor(tipo){
        this.tipo = tipo;
    }
};
//Reutilizo tipo de mi clase animal en la clase Domesticos, y hago referencia a la variable con super
class Domesticos extends Animal{
    constructor(tipo, nombre){
        super(tipo)
        this.nombre = nombre;
    }
}

var animalDomestico = new Domesticos ("Gato", "Manchas");
console.log(animalDomestico);

https://www.youtube.com/watch?v=seaq4UxKNHU&list=LL3IoTpfr13PvuVJXJEhbRBQ&index=4&t=0s
6:19