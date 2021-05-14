"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
console.log("tercer archivo de ts");
var Calculadora = /** @class */ (function () {
    function Calculadora(valor) {
        var _this = this;
        this.sumar = function () { return _this.numero + _this.numero; };
        console.log("Iniciando la calculadora");
        this.numero = valor;
        console.log(this.numero);
    }
    Calculadora.prototype.multiplicar = function () {
        return this.numero * this.numero;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
var calcuA = new Calculadora(12);
console.log(calcuA.sumar());
var calcB = new Calculadora(15);
console.log(calcB.multiplicar());
