class gato{
        constructor(nombre,edad,peso){
            this.nombre = nombre;
            this.edad = edad;
            this.peso = peso;
        }

        correr(){
            console.log("El gato corre");
        }
};

var gato1 = new gato("Manchas",1,4);
console.log(gato1);
console.log(gato1.correr());