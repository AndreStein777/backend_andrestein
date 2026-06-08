const cadastro = [];

function adicionarPessoa(nome, idade) {
  cadastro.push({
    nome,
    idade
  });

  console.log(`${nome} foi cadastrado com sucesso!`);
}

function listarPessoas() {
  console.log("\n=== PESSOAS CADASTRADAS ===");

  cadastro.forEach((pessoa, index) => {
    console.log(
      `${index + 1}. ${pessoa.nome} - ${pessoa.idade} anos`
    );
  });
}

// adicionando pessoas
adicionarPessoa("putin", 18);
adicionarPessoa("jean", 31);
adicionarPessoa("Bianca", 16);

// mostrando lista
listarPessoas();