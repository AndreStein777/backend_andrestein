const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));
let cidade = prompt("Digite sua cidade: ");

console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}.`);