console.log("hol")
$(document).ready(function(){   
    let mostr=$('#btcarrera'),
        inm=$('#carrera');
        mostr.hide();
        inm.hide(); 


        
    $('.btn-primary').click(function () { 
        $('#container h1').css({textTransform:'uppercase'})
    });
    $('#formu').submit(function (evento) { 
        evento.preventDefault();
        let nombre=$('#nombre').val();
        let apellido=$('#apellido').val();
        let edad=$('#edad').val();
        console.log(nombre);
        console.log(apellido);
        if(edad>=18){
            let carrera=$('#carerra')
            console.log(carrera)
            mostr.show();
            inm.show();
        }
    });

    $('#formu2').submit(function(evento){
        evento.preventDefault();
        let materia=$('#materia').val();
        let nota=$('#nota').val();
        if(nota>51){
            alert("aprobado")
        }if(nota<51){
            alert("reprobado")
        }
    });
});