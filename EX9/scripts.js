numeroPessoas = prompt("Digite a quantidade de pessoas que serão cadastradas:");
    nomes = [];
    
    for(i = 0; i < numeroPessoas; i++) {
        nomes.push(prompt(`Digite o nome da pessoa ${i+1}: `));
    }
    document.write(`<h1>Ordem de apresentação dos grupos:</h1>`);
    document.write(`<div class="boxExterna"`);
    for(i = 0; i < numeroPessoas; i++) {
        pessoaSorteada = nomes[parseInt(Math.random()*nomes.length)];
        document.write(`<ol><li>${i+1}º - ${pessoaSorteada}</li></ol)`);

        if(nomes.indexOf(pessoaSorteada) != -1) {
            pessoaSorteada = nomes.splice(nomes.indexOf(pessoaSorteada),1);
        }     
    }
    document.write(`</div>`);