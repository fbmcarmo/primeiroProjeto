var calculadora = require("./calculadora");
var promptSync = require("prompt-sync");
var prompt = promptSync();

var prova1 = parseInt(prompt("Digite a nota da prova 1: "));
var prova2 = parseInt(prompt("Digite a nota da prova 2: "));
var prova3 = parseInt(prompt("Digite a nota da prova 3: "));
var prova4 = parseInt(prompt("Digite a nota da prova 4: "));
var prova5 = parseInt(prompt("Digite a nota da prova 5: "));
var trabalho = parseInt(prompt("Digite a nota do trabalho: "));

var somaAv1 = calculadora.soma(prova1, prova2);
var av1 = calculadora.divisao(somaAv1, 2);

var somaAv2 = calculadora.soma(prova3, prova4);
var av2 = calculadora.divisao(somaAv2, 2);

var somaAv3 = calculadora.soma(calculadora.multiplicacao(prova5, 0.4), calculadora.multiplicacao(trabalho, 0.6));
var av3 = calculadora.divisao(somaAv3, 2);





