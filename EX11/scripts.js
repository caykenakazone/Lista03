document.write(`<h1 style="text-align:center">JOGUE TRUCO</h1>`);
document.write(`<h2 style="text-align:center;color:red">Cartas sorteadas</h2>`);

document.write(`<div class="box">`);

for (i = 0; i <= 3; i++) {
    document.write(`<p>Cartas do Jogador ${i + 1}: <img src="cartas/carta${parseInt(Math.random() * 27) + 1}.png"><img src="cartas/carta${parseInt(Math.random() * 27) + 1}.png"><img src="cartas/carta${parseInt(Math.random() * 27) + 1}.png"></p>`);

}

document.write(`</div>`);