totp = prompt('Qual é total de passageiros?');
        nomes= [];
        idades= [];
        soma = 0;

        for (var i=0; i<totp; i++) {
            nomes.push(prompt(`Qual o nome do passageiro ${i+1}:`));
            idade = prompt(`Qual a idade dos passageiro ${i+1}:`);
            soma = soma + Number(idade);
            idades.push(idade);
        }

        document.write(`<p> Média = ${(soma/totp).toFixed(2)} </p>`)

        idpass = parseInt(Math.random()*totp);
        document.write(`<p> Passageiro Sorteado = ${nomes[idpass]} </p> <br>`)

        document.write(`<p> Lista de passageiros X idade </p>`)
        document.write(`<p> Nomes = ${nomes} </p>`)
        document.write(`<p> Idades = ${idades} </p>`)