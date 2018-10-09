$(document).ready(eventos)

function eventos (){
    $("#botonModal").click(mostrarModal);
    $("#password").keypress(chequear);
    $("#password").click(chequear);
    
}

function mostrarModal(){
    $("#exampleModal").modal("show");
    $("#nombre").trigger("focus");

    /*
    $('#exampleModal').on('shown.bs.modal', function () {
        $('#nombre').trigger('focus')
    })
    */
}

function limpiar(){
    $("#password").val("");
}

function chequear(){
    var nombre = $("#nombre").val();
    var password = $("#password").val();
    if(nombre.length > 0){
        $("#password").trigger("focus");
    }
    else{ 
        
        limpiar();
        $("#nombre").trigger("focus");
        limpiar();
    }
        
}