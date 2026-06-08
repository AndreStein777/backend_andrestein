const prompt = require("prompt-sync")();

const primeiroNumero = Number(prompt("Informe o primeiro número: "));
const segundoNumero = Number(prompt("Informe o segundo número: "));

const soma = primeiroNumero + segundoNumero;
const subtracao = primeiroNumero - segundoNumero;
const multiplicacao = primeiroNumero * segundoNumero;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);

if (segundoNumero === 0) {
    console.log("Erro: divisão por zero.");
} else {
    const divisao = primeiroNumero / segundoNumero;
    console.log("Divisão:", divisao);
}