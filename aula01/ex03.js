const prompt = require("prompt-sync")();

let total = 0;
const quantidadeNotas = 5;

for (let contador = 1; contador <= quantidadeNotas; contador++) {
    let nota = Number(prompt(`Digite a nota ${contador}: `));
    total += nota;
}

let media = total / quantidadeNotas;

console.log(`Sua média foi: ${media}`);

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}