const file = require('fs');

file.readFile('./archivo1.txt', function(error, datos){
    if(error){
        console.log("Error al abrir el archivo");
        console.log(error);
    }
    else{
        console.log(datos.toString());
    }
});