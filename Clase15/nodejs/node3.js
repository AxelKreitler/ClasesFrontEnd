const file = require('fs');

file.writeFile('./archivo1.txt',
                'este archivo fue creado con node',
                function(error){
                    if(error){
                        console.log('error al crear archivo');
                    }
                    else{
                        console.log('archivo creado correctamente');
                    }
});

console.log('programa terminado');