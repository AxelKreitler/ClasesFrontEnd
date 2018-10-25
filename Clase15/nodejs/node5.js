const http = require('http');
const server = http.createServer(function(req,res){
    //req: request se encarga de analizar los recursos q se solicitan, las variables de sesion a crear,etc
    //res: respuesta cabeceras implicadas en la pagina, lo visible para usuario
    res.writeHead(200,{'content-type':'html'});
    res.write("<html><head></head><body><h1>Pagina Nueva</h1></body></html>");
});

server.listen(3333);

console.log("web iniciada");