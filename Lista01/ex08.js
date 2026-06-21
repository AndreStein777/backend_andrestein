let tabuleiro = "";
for (let linha = 0; linha < 8; linha++) {

    for (let coluna = 0; coluna < 8; coluna++) {

        if ((linha + coluna) % 2 === 0) {
            tabuleiro += " ";
        } else {
            tabuleiro += "#";
        }
    }
    tabuleiro += "\n";
}
console.log(tabuleiro);