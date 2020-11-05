const fs = require('fs');

const utilizaSVG = require('./desenho');

// leitura do arquivo em que serão aplicadas as regras de produção
let arquivo = fs.readFileSync('./entrada.txt').toString();
let resultado = [];

for (let i = 0; i < arquivo.length; i++) {
    let char = arquivo[i];
    let aux = '';
    if(char == 'F'){
      aux = 'FF+F+f+F-fBF-f-Ff+B-F'
      resultado.push(aux);
    }
    else if(char == 'f')
      char = 'F'
    else if(char == 'B')
      char = 'B'
    else if(char == '+')
      char = '+'
    else if(char == '-')
      char = '-'
  
  resultado.push(char);
}

let resultadoTxt = resultado.join(''); //junta lista em uma string
console.log(resultadoTxt); //exibe no console do navegador a lista stringada

utilizaSVG(resultadoTxt);