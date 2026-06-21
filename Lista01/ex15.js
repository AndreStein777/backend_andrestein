let produtos = [
    { id: 1, nome: "Mouse", preco: 90 },
    { id: 2, nome: "Teclado", preco: 120 },
    { id: 3, nome: "Monitor", preco: 800 },
    { id: 4, nome: "Fone", preco: 150 },
    { id: 5, nome: "mouseped", preco: 90 }
];
// a)
let produto = produtos.find(p => p.id === 3);
console.log(produto);
// b)
let caros = produtos.filter(p => p.preco > 100);
console.log(caros);
// c)
let nomes = produtos.map(p => p.nome);
console.log(nomes);
// d)
produtos.forEach(p => {
    console.log(`ID: ${p.id} - ${p.nome} - R$${p.preco}`);
});