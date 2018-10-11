$(document).ready(InicioPrograma);

function InicioPrograma(){
    $("#boton1").click(ReducirOpacidad);
    $("#boton2").click(AumentarOpacidad);
    $("#boton3").dblclick(mostrarOcultarElemento);
    $("#sweetalert").click(mostrarMensaje);
}

function ReducirOpacidad(){
    $("#descripcionEvento").fadeTo("normal", "0.3");
}
function AumentarOpacidad(){
    $("#descripcionEvento").fadeTo("normal", "1");
}
function mostrarOcultarElemento(){
    $("#eventoDos").toggle("slow");
}
function mostrarMensaje(){
    swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false
      })
}