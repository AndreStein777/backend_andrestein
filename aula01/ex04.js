const prompt = require("prompt-sync")();

const valor = Number(prompt("Informe um número: "));

for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    let resultado = valor * multiplicador;
    console.log(valor + " x " + multiplicador + " = " + resultado);
}