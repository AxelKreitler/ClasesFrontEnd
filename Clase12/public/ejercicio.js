$(document).ready(InicioPrograma);

function InicioPrograma(){
    $("#botonEnvio").hide();
    $("#nombre").keypress(FuncionBoton);
    $("#apellido").keypress(FuncionBoton);
    $("#DNI").keypress(FuncionBoton);
    $("#botonEnvio").click(botonEnviado);
}

function FuncionBoton(){

    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var DNI = $("#DNI").val();

    if(nombre != "" && apellido != "" && DNI != ""){
        $("#botonEnvio").show();
    }
    else{
        $("#botonEnvio").hide();
    }
}

function botonEnviado(){
    swal({
        title: 'Estas seguro que deseas enviar el formulario?',
        text: "No podras cambiarlo despues de enviarlo!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Enviar!'
      }).then((result) => {
        if (result.value) {
          swal(
            $("#nombre").val() +" "+ $("#apellido").val()+ " " + "DNI: " + $("#DNI").val(),
            'Su formulario se ha enviado.',
            'success'
          )
        }
      })
}