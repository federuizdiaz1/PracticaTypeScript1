import { Gato } from "./gato";
import { Perro } from "./perro";
import { Calculadora } from "./calculadora";

let gato1 = new Gato();
let perro1 = new Perro();

//otra clase
let calcuA = new Calculadora(12);
console.log(calcuA.sumar());
let calcB = new Calculadora(15);
console.log(calcB.multiplicar());
