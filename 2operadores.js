var num1 = 10;
var num2 = 20;

console.log("Operaciones:")
//Suma
console.log(num1 + num2);
//Resta
console.log(num2-num1);
//Multiplicacion
console.log(num1*num2);
//Division
console.log(num2/num1);
//Modulo de division (Resto)
console.log(num2%num1);
//Incremento
console.log(num1++);
//Decremento
console.log(num1--);

//Operadores condicionales
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que
// == igual que
// != desigualdad
 
console.log("Operadores condicionales:");
console.log(num2 > num1);
console.log(num2 < num1);
console.log(num2 >= num1);
console.log(num2 <= num1);
console.log(num2 == num1);
console.log(num2 != num1);

//Operadores logicos
// && operador "Y"
// || operador "O"
// ! operador "NO"

console.log("Operadores logicos:");
console.log(num2 != num1 && num1 < num2);
console.log(num2 == num1 || num2 < num1);
console.log( !(num1 == 20));

//Operadores de asignacion
console.log("Operadores de asignacion:");

var n1 = 1;
var n2 = 2;
var n3;

//Tanto esto como *** es lo mismo
n3 = n1 + 20;
console.log(n3);
//***
n3 += n1;
console.log(n3);

n3 -= 1;
n3 *= 2;
n3 /= 10;