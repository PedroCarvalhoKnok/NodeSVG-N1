# NodeSVG-N1


Trabalho N1- *Compiladores*
#Resumo<h1>
Trabalho feito em Node(versão _v14.15.0_) para gerar um desenho baseado em regras de produção presente no arquivo txt *entrada.txt*,
o arquivo passa pelas regras e métodos feitos em *js* e elabora a figura a partir de retas instanciadas, vale resaltar que o angulo digitado pelo usuario determina a inclinação da reta à esquerda e à direita, gerará um arquivo *saida.svg* com o desenho no body da página web.
 ___________________
#Dependecias utilizadas<h2>
  .npm install jsdom
  .npm install d3
  .npm install fs
_____________________
#regra de produção utilizada para a figura<h3>
  FF+F+f+F-fBF-f-Ff+B-F|75°
____________________  
#Gramática
Simbolos e suas ações na aplicação:
* F-> Desenha Reta
* f-> Salva o ponto que está e não executa a reta
* B-> Remove o ponto atual e retorna para o anterior
* +-> Vira um angulo theta(determinado pelo usuário) à direita
* - -> Vira um angulo theta(determinado pelo usuário) à esquerda
___________________
  
  
  
  
