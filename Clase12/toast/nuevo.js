$(document).ready(function(){

$( ".btn-primary" ).on( "click", function() {
  flash( 'This is a default flash.js notification' ) ;
});

$( ".btn-danger" ).on( "click", function() {
  flash( 'With Custom Background/Text Colors',{
    'bgColor' : '#C0392B'
  } ) ;
});
$( ".btn-warning" ).click(function() {
  flash( 'Always be visible until clicked',{
    'autohide' : false,
    'bgColor' : '#5E9DE6',
     'fadeIn' : 10000
  }) ;
});
});