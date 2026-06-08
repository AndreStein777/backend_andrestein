const pessoas = [
    { nome: "Andre", idade: 15 },
    { nome: "paulo", idade: 27 },
    { nome: "cleyton", idade: 19 },
    { nome: "ana", idade: 12 }
  ];
  
  // buscar uma pessoa
  const busca = pessoas.find((pessoa) => pessoa.nome === "Andre");
  
  console.log("Pessoa encontrada:");
  console.log(busca);
  
  // filtrar maiores de idade
  const maiores = pessoas.filter((pessoa) => pessoa.idade >= 18);
  
  console.log("\nMaiores de idade:");
  console.log(maiores);