const fs = require('fs');

const utilizaSVG = require('./desenho');

// regras de produção que transformam as entradas do arquivo
const regras = new Map([ //map de regras para cada simbolo na regra
    ['F', 'FF+F+f+F-fBF-f-Ff+B-F'],
    ['f', 'f'],
    ['B', 'B'],
    ['+', '+'],
    ['-', '-'],
]);

// leitura do arquivo em que serão aplicadas as regras de produção
let arquivo = fs.readFileSync('./entrada.txt').toString();
let resultado = [];

for (let i = 0; i < arquivo.length; i++) {
    const charAtual = arquivo[i];
    const char = regras.get(charAtual);

    resultado.push(char);
}

let resultadoTxt = resultado.join(''); //junta lista em uma string
console.log(resultadoTxt); //exibe no console do navegador a lista stringada

utilizaSVG(resultadoTxt);