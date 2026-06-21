let alunos = [
    { nome: "Andre", nota: 8 },
    { nome: "Emanuel", nota: 6 },
    { nome: "Vitor", nota: 9 },
    { nome: "Mateus", nota: 5 },
    { nome: "Wallace", nota: 7 }
];
let situacaoAlunos = alunos.map(aluno => {
    return {
        nome: aluno.nome,
        nota: aluno.nota,
        situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});
console.log(situacaoAlunos);
let aprovados = situacaoAlunos.filter(aluno => aluno.situacao === "Aprovado");
console.log(`Quantidade de aprovados: ${aprovados.length}`);
let somaNotas = 0;
alunos.forEach(aluno => {
    somaNotas += aluno.nota;
});
let media = somaNotas / alunos.length;
console.log(`Media da turma: ${media}`);