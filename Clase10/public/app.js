function numerosRedondos(numeros){
    var aux = 0;
    for(var i = 0 ; i< numeros.length ; i++){
        if(numeros[i] >= 20){
            aux ++;
        }
    }   
    document.write("La cantidad de numeros mayores a 20 son: " + aux);
}