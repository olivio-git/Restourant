let lunes=2.00,martes=2.00,miercoles=2.00,jueves=2.50,viernes=2.50,sabado=3.00,domingo=3.00;
let ingreso=prompt(`Ingresar el dia de la semana.
lunes: 2.00 Bs por hora
martes: 2.00 Bs por hora
miercoles: 2.00 Bs por hora
jueves: 2.50 Bs por hora
viernes: 2.50 Bs por hora
sabado: 3.00 Bs por hora
domingo: 3.00 Bs por hora
`,`lunes`),
usuario=prompt(`Ingresar el nombre del usuario`,``);
function calc(ingreso,usuario){
    switch(ingreso){
        case "lunes":
            let lun=lunes;
            ca(lun,usuario);
            break;
        case "martes":
            let mar=martes;
            ca(mar,usuario);
            break;
        case "miercoles":
            let mier=miercoles;
            ca(mier,usuario);
            break;
        case "jueves":
            let juev=jueves;
            ca(juev,usuario);
            break;
        case "viernes":
            let vier=viernes;
            ca(vier,usuario);
            break;
        case "sabado":
            let sab=sabado;
            sabdom(sab,usuario);
            break;
        case "domingo":
            let dom=sabado;
            sabdom(dom,usuario);
            break;
        default:document.write("El dia ingresado no es correcto");
    }
}
function sabdom(dia,usuario){
    let tiempo=parseInt(prompt(`Ingresar el tiempo de uso del estacionamiento.
Usuario: ${usuario}`,`0`));
    if(tiempo>=1 && tiempo<=24){
        let totalapagar=(tiempo*dia);
        document.write(`El usuario: ${usuario} deberá pagar ${totalapagar} Bs`)
        console.log("Total apagar: "+totalapagar+" Bs");
    }
    if(tiempo>24){
        document.write("El tiempo no es válido!")
        console.log("El tiempo no es válido");
    }
}
calc(ingreso,usuario,);
function ca(dia,usuario){
    let tiempo=parseInt(prompt(`Ingresar el tiempo de uso del estacionamiento expresado en horas.
    Usuario: ${usuario}`,`0`));
    if(tiempo>=1 && tiempo<=24){
    let totalapagar=(tiempo*dia);
        document.write(`El usuario: ${usuario} deberá pagar ${totalapagar} Bs`)
        console.log("Total apagar: "+totalapagar+" Bs");
    }
    if(tiempo>24){
        document.write("El tiempo no es válido!")
        console.log("El tiempo no es válido");
    }
}