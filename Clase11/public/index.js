// mostrarContador, obtenerDatos, colorearElementos

// esperar a que cargue la pagina, poner a la escucha diferentes eventos, ejecutar funciones

$(document).ready(eventos)

var contador = 0;

function eventos (){
    //document.geElementbyId("") el equivalente en jquery: $("#idABuscar")
    $("#mostrarContador").click(incrementarContador);
    $("#obtenerDatos").click(obtenerDatos);
    $("#colorearElementos").click(colorear);
    $("#deplegarFormulario1").dblclick(formularioDesplegable);
    
}


function incrementarContador(){
    contador++;
    alert(contador);
}

function obtenerDatos(){
    var nombre = $("#nombre").val();
    var password = $("#password").val();
    if(nombre.length > 0 && password.length > 0){
        alert("Bienvenido " + nombre);
    }
    else{
        $("#nombre").val("");
        $("#password").val("");
        $("#mensajeDatos1").html("Datos Incorrectos");
    }
}

function colorear(){

}

function formularioDesplegable(){
    $("#formularioDesplegable1").html("<form>Nombre de usuario <input type='nombre1'></form>");
}
