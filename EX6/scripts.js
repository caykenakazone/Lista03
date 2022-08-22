nr = [];
for (var i = 0; i < 6; i++) {
    nr.push(parseInt(Math.random() * 60) + 1);
}
document.write(`<p> Numeros para Mega Sena = ${nr} </p>`)