var http = require("http");

http.createServer(
    function(request, response){
        response.end("Olá!");
    }
).listen(8888);
console.log("Servidor está no ar");