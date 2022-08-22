// papel=1 pedra=2 tesoura=3

nraleatorio1 = parseInt(Math.random()*3)+1;
nraleatorio2 = parseInt(Math.random()*3)+1;

if (nraleatorio1==1) {
    document.write(`<p>Jogador 1 = Papel</p> <img src="pedra_papel_tesoura/re${nraleatorio1}.PNG">`)
} 
else {
    if (nraleatorio1==2) {
        document.write(`<p>Jogador 1 = Pedra</p> <img src="pedra_papel_tesoura/re${nraleatorio1}.PNG">`)
        
}
else {
    document.write(`<p>Jogador 1 = Tesoura</p> <img src="pedra_papel_tesoura/re${nraleatorio1}.PNG">`)
}
}

if (nraleatorio2==1) {
    document.write(`<p>Jogador 2 = Papel</p> <img src="pedra_papel_tesoura/re${nraleatorio2}.PNG">`)
} 
else {
    if (nraleatorio2==2) {
        document.write(`<p>Jogador 2 = Pedra</p> <img src="pedra_papel_tesoura/re${nraleatorio2}.PNG">`)
        
}
else {
    document.write(`<p>Jogador 2 = Tesoura</p> <img src="pedra_papel_tesoura/re${nraleatorio2}.PNG">`)
}
}


if (nraleatorio1==nraleatorio2 ) {
    document.write(`<p>Empatou</p>`)
} 
else {
    if (nraleatorio1==1 && nraleatorio2==2 || nraleatorio1==2 && nraleatorio2==3 || nraleatorio1==3 && nraleatorio2==1 ) {
        document.write(`<p>Jogador 1 GANHOU!!`);
    }
    else {
        document.write(`<p>Jogador 2 GANHOU!!`);
    }
}