console.log("tercer archivo de ts");
export class Calculadora {
  numero: number;
  constructor(valor: number) {
    console.log("Iniciando la calculadora");
    this.numero = valor;
    console.log(this.numero);
  }

  sumar = () => this.numero + this.numero;

  multiplicar() {
    return this.numero * this.numero;
  }
}

