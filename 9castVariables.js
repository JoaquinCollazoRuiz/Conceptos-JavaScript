var a = "9.2";
console.log(typeof a);

//String a Number
var b = Number(a);
console.log(typeof b);

//Decimal a entero
var decimal = 1.55;
var entero = parseInt(decimal);
console.log(entero);

//isNaN comprobacion si es numero
var letra = "A";
var l = isNaN(letra); 
console.log(l)

//isInteger mirar si es numero entero
var i = 1.2;
var i2 = Number.isInteger(i);
console.log(i2);

//toFixed
var num = 12.322346482;
var numRecortado = num.toFixed(2);
console.log(numRecortado);

//toString
var numeroDecimal = 12.12233;
var c = numeroDecimal.toString();
console.log(typeof c);