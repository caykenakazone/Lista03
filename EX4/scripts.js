min = Number(prompt('Qual é o valor min?'));
max = Number(prompt('Qual é o valor maximo?'));
num = parseInt(Math.random() * (max - min + 1)) + min;
oi = parseInt(Math.random() * (max - min + 1)) + min;
document.write(`${oi}`)