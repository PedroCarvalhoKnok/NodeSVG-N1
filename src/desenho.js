var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const d3 = require('d3');
const fs = require('fs');

const jsdom = new JSDOM(`<!DOCTYPE html><body></body>`);
var corpo = d3.select(dom.window.document.querySelector("body")) //sera criada as imagens no body
let svg = corpo.append('svg').attr('width', 10000).attr('height', 10000).attr('xmlns', 'http://www.w3.org/2000/svg');


const x1Inicio = 0;
const y1Inicio = 0;
const x2Inicio = 0;
const y2Inicio = 0;

var listaPontos = [];
function Line(x1, y1, x2, y2) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    //construtor da função linha
    this.theta = Math.PI / 2; // 90°
    this.mover = function (x, y, angulo) {
        this.x2 = x;
        this.y2 = y;
        this.theta = angulo;
    };

    this.desenhar = function () {
        desenhaLinha(this.x1, this.y1, this.x2, this.y2);
    };
}

const linha = new Line(x1Inicio, y1Inicio, x2Inicio, y2Inicio); //linha com os atributos iniciais

function desenha(caracter,angulo){

    switch(caracter){
        case 'F':
            function desenhar(){
                linha.x1 = linha.x2;  //atribui o proximo ponto ao valor do ponto anterior(eixo x)
                linha.y1 = linha.y2;
                linha.x2 = linha.x1 + 20 * Math.cos(linha.theta); //eixo x
                linha.y2 = linha.y1 + 20 * Math.sin(linha.theta); //eixo y

                linha.desenhar(); // chamada recursiva 
            }
        case 'f':
            function mantemPosicao(){
                listaPontos.push({xAtual: linha.x2, yAtual: linha.y2, anguloatual: linha.theta }); //adiciona em uma lista de objetos os atributos do ponto               

            }
        case 'B':
            function retorna(){
                if(listaPontos.length > 0){
                    const { xAtual, yAtual, anguloatual } = listaPontos.pop(); //retira obj ponto da lista de pontos
                    linha.mover(xAtual, yAtual, anguloatual); //retorna ao ultimo angulo salvo na lista
                    return;
                }
                linha.mover();
            }
        case '+':
            function direita(){
                let rad = (angulo * Math.PI)/180;
                linha.theta += rad; //atribui ao ponto uma inclinação de 60° a direita(+)
            }
        case '-':
            function esquerda(){
                let rad = (angulo * Math.PI)/180;
                linha.theta -= rad;  //atribui ao ponto uma inclinação de 60° a esquerda(-)
            }
    }



}

function desenhaLinha(x1, y1, x2, y2) { //desenha a linha criada ao body do html utilizando o SVG
    svg.append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("style", "stroke:rgb(0,0,0);stroke-width:2");
}

function utilizaSVG(regraProducao) {
    let ang = regraProducao.split('|')[1];
    for (let char of regraProducao) {
        const caracterAtual = char;
        const angEscolhido = ang;

        desenha(caracterAtual,angEscolhido);

        
    }

    fs.writeFileSync('saida.svg', body.html()); //arquivo svg com o desenho relativo a regra posta
}

module.exports = utilizaSVG;
