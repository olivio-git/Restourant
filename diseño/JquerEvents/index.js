$(document).ready(function(){
    $('img').attr('src','imagen.jpg');
    $('img:first').attr('width','50');
    $('img:last').attr('width','200');
    let parrafo=$('#resultado p');
    /*$('.btn-primary').click(function () { 
        parrafo.addClass('display-4')
    });
    $('.btn-danger').click(function () { 
        parrafo.removeClass('display-4');
        
    });
    $('.btn-warning').click(function () { 
        parrafo.toggleClass('display-4');
        
    });*//*
    $('.btn-primary').click(function () { 
        parrafo.show("2000")
    });
    $('.btn-danger').click(function () { 
        parrafo.hide('500');
    });
    $('.btn-warning').click(function () { 
        parrafo.toggle('1000');
    });*/
    $('#formulario').submit(function (evento) { 
        evento.preventDefault();
        let nombre=$('#nombre').val();
        console.log(nombre);
        });
});