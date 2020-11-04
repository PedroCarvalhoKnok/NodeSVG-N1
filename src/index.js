const fs = require('fs');

const utilizaSVG = require('./desenho');

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