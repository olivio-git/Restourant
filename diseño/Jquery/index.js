let n1=parseInt(prompt("ingrese un numero")),
n2=parseInt(prompt("ingrese un numero"));
function clickc(){
    alert('holis');
}
$(document).ready(function(){
    //$('h1').html('Etiqueta');
    //$('.display-4').html(n1+n2);
    //$('#idh1').html('Es un id');
    $('.container h1:first').html("cambiado h1");
    $('#idh1').addClass('text-danger');
    $('#idh1').removeClass('display-4');
    //$('#idh2').css('color','blue');
    $('#idh2').css('background','red');
    $('#idh2').css({color:'red',background:'black',padding:'100px',textAlign:'center',fontFamily:'Open Sans'});q
    var button ='<button onClick="clickc()" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#contentId" aria-expanded="false" aria-controls="contentId">THOR</button>';
    $('.container').append(button);  
    $('.container').append(n1); 
});