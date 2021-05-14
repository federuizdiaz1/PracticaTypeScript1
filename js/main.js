"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gato_1 = require("./gato");
var perro_1 = require("./perro");
var calculadora_1 = require("./calculadora");
var gato1 = new gato_1.Gato();
var perro1 = new perro_1.Perro();
//otra clase
var calcuA = new calculadora_1.Calculadora(12);
console.log(calcuA.sumar());
var calcB = new calculadora_1.Calculadora(15);
console.log(calcB.multiplicar());
