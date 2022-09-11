let nombre1=prompt("ingrese su nombre",""),
nombre2=prompt("ingrese nombre","");
$(document).ready(function(){
    $('#conatainer').html('')
    $('#idh3').css({color:'red',background:'black'});
    var brcp
    $('#idh1').html(nombre1);
    $('#idh2').html(nombre2);
    $('#table').css({ background:"blue",color:"white",border:"1px black solid",});
    $('#container').append(nombre1);
    //append final ------ prepend inicio
    let x;
    x=$(document).ready(iniciar());
    function iniciar(){
        x=$('#parrafo').click(presionar)
    }
    function presionar(){
        alert('holi mundo!');
    }
    
});