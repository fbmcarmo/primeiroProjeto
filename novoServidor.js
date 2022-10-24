var express = require("express");
var fs = require("fs");

var app = express();

var html = fs.readFileSync("index.html");

var login = fs.readFileSync("login.html");

app.get("/", function(request, response){
    response.end(html);
});

app.get("/login", function(request, response){
    let nome = request.query.nome;
    let sobrenome = request.query.sobrenome;
    if(nome == undefined && sobrenome == undefined){
        response.end("Bem-vindo usuário");
    } else {
        response.end("Bem-vindo " + sobrenome + ", " + nome);
    }
});

app.listen(8888, function(erro){
    if(erro){
        console.log(erro);
    } else {
        console.log("Servidor está on...");
    }
});
