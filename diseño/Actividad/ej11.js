let lunes=2.00,jueves=2.50,sabado=3.00, newminute=0;
let dia=prompt(`Ingresar el dia: `,`lunes`),
time=prompt(`Ingresar tiempo en minutos: `,``),
usuario=prompt(`Ingresar el nombre del usuario`,``);
let hora=parseInt(time/60);

calc(dia, time, usuario);
function calc(dia,time, usuario){
    let tiempo=parseInt(time);
    switch(dia){
        case "lunes":
            if(tiempo>5&& tiempo<60)
            {
                alert('el usuario: '+usuario+'debe pagar:'+(1*lunes)+'bs');
            }
            else if(tiempo>60 )
            {
                newminute= newminute + parseInt((tiempo-(60*hora)));
                if(newminute>5)
                {
                    alert('el usuario: '+usuario+'debe pagar:'+((hora+1)*lunes)+'bs');
                }
                else
                {
                    alert('el usuario: '+usuario+'debe pagar:'+(hora*lunes)+'bs');
                }
            }
            else
            {
                alert('el usuario: '+usuario+'debe pagar no paga');
            }
            break;
        case "martes":
            if(tiempo>5&& tiempo<60)
            {
                alert('el usuario: '+usuario+'debe pagar:'+(1*lunes)+'bs');
            }
            else if(tiempo>60 )
            {
                newminute= newminute + parseInt((tiempo-(60*hora)));
                if(newminute>5)
                {
                    alert('el usuario: '+usuario+'debe pagar:'+((hora+1)*lunes)+'bs');
                }
                else
                {
                    alert('el usuario: '+usuario+'debe pagar:'+(hora*lunes)+'bs');
                }
            }
            else
            {
                alert('el usuario: '+usuario+'debe pagar no paga');
            }
            break;
        case "miercoles":
            if(tiempo>5&& tiempo<60)
            {
                alert('el usuario: '+usuario+'debe pagar:'+(1*lunes)+'bs');
            }
            else if(tiempo>60 )
            {
                newminute= newminute + parseInt((tiempo-(60*hora)));
                if(newminute>5)
                {
                    alert('el usuario: '+usuario+'debe pagar:'+((hora+1)*lunes)+'bs');
                }
                else
                {
                    alert('el usuario: '+usuario+'debe pagar:'+(hora*lunes)+'bs');
                }
            }
            else
            {
                alert('el usuario: '+usuario+'debe pagar no paga');
            }
            break;
        case "jueves":
            if(tiempo>5&& tiempo<60)
            {
                alert('el usuario: '+usuario+'debe pagar:'+(1*jueves)+'bs');
            }
            else if(tiempo>60 )
            {
                newminute= newminute + parseInt((tiempo-(60*hora)));
                if(newminute>5)
                {
                    alert('el usuario: '+usuario+'debe pagar:'+((hora+1)*jueves)+'bs');
                }
                else
                {
                    alert('el usuario: '+usuario+'debe pagar:'+(hora*jueves)+'bs');
                }
            }
            else
            {
                alert('el usuario: '+usuario+'debe pagar no paga');
            }
            break;
        case "viernes":
            if(tiempo>5&& tiempo<60)
            {
                alert('el usuario: '+usuario+'debe pagar:'+(1*jueves)+'bs');
            }
            else if(tiempo>60 )
            {
                newminute= newminute + parseInt((tiempo-(60*hora)));
                if(newminute>5)
                {
                    alert('el usuario: '+usuario+'debe pagar:'+((hora+1)*jueves)+'bs');
                }
                else
                {
                    alert('el usuario: '+usuario+'debe pagar:'+(hora*jueves)+'bs');
                }
            }
            else
            {
                alert('el usuario: '+usuario+'debe pagar no paga');
            }
            break;
        case "sabado":
            if(tiempo>5&& tiempo<60)
            {
                alert('el usuario: '+usuario+'debe pagar:'+(1*sabado)+'bs');
            }
            else if(tiempo>60 )
            {
                newminute= newminute + parseInt((tiempo-(60*hora)));
                if(newminute>5)
                {
                    alert('el usuario: '+usuario+'debe pagar:'+((hora+1)*sabado)+'bs');
                }
                else
                {
                    alert('el usuario: '+usuario+'debe pagar:'+(hora*sabado)+'bs');
                }
            }
            else
            {
                alert('el usuario: '+usuario+'debe pagar no paga');
            }
            break;
        case "domingo":
            if(tiempo>5&& tiempo<60)
            {
                alert('el usuario: '+usuario+'debe pagar:'+(1*sabado)+'bs');
            }
            else if(tiempo>60 )
            {
                newminute= newminute + parseInt((tiempo-(60*hora)));
                if(newminute>5)
                {
                    alert('el usuario: '+usuario+'debe pagar:'+((hora+1)*sabado)+'bs');
                }
                else
                {
                    alert('el usuario: '+usuario+'debe pagar:'+(hora*sabado)+'bs');
                }
            }
            else
            {
                alert('el usuario: '+usuario+'debe pagar no paga');
            }
            break;
        default:alert('ingrese datos validos');
    }
}