//El ejercicio de los indices ABCDE empieza aqui!
let rol="",
crol="",
codC=0,
codV=0,
compradores=[],
vendedores=[],
band=0,
imprimir=[],
fechavencimiento=new Date('2022-08-21');
console.log(fechavencimiento);
let btncompradores=document.getElementById('btnc').style.visibility="hidden";
let btnvendedores=document.getElementById('btnv').style.visibility="hidden";
ingresarrol();
function ingresarrol(){
    rol=prompt('INGRESAR SU ROL: COMPRADOR, VENDEDOR',''),
    crol=rol.toLowerCase();
}
comprobar(crol);
function vendd(){   
    if(vendedores.length>=0){
        for(let i=0;i<vendedores.length;i++){
            let cmp=vendedores[i];
            document.write(`Informacion del vendedor nro: ${i+1} <br/><br/>`);
            document.write(`VENDEDOR: ${cmp.nombre}<br/>CON CÓDIGO: ${cmp.codPersona}<br/>`);
            document.write(`APELLIDO: ${cmp.apellido} <br/>`)
            document.write(`CARGO: ${cmp.vendedor.cargo}<br/><br/>`);
            btnvendedores=document.getElementById('btnv').style.visibility="visible";
        }
        
    }
}
function compp(){
    if(compradores.length>0){
        for(let i=0;i<compradores.length;i++){
            let cmp=compradores[i];
            document.write(`Informacion Comprador nro: ${(i+1)} <br/><br/>`);
            document.write(`COMPRADOR: ${cmp.nombre} CON CÓDIGO: <br/>${cmp.codPersona}<br/>`);
            document.write(`APELLIDO: ${cmp.apellido} <br/>`);
            document.write(`PLACA: ${cmp.vehiculo.placa} <br/>`)
            document.write(`RUAT: ${cmp.vehiculo.ruat}<br/>`);
            document.write(`NACIONALIDAD: ${cmp.comprador.nacionalidad}<br/><br/><br/>`);
            btncompradores=document.getElementById('btnc').style.visibility="visible";
        }
        
    }
}

function comprobar(crol){
    if(crol){
        if(crol!='comprador' && crol!='vendedor'){
            document.write(`El valor ${crol} no es válido.`);
        }if(crol=='comprador'){
            let numero=parseInt(prompt(`Ingrese el número compradores a agregar!.`,1))
            for(let i=0;i<numero;i++){
                codC++;
                let nam=prompt(`Ingrese su nombre:`,``),
                apellido=prompt(`Ingrese su apellido;`,``);
                alert("Ingrese los datos del vehiculo");
                let placa=prompt(`Ingrese su placa:`,``),
                modelo=parseInt(prompt(`Ingrese el año del modelo: `,1950)),
                foto=prompt(`Ingrese la direccion de foto vehicular:`,`https://`),
                ruat=prompt(`Ingrese el ruat:`,``);
                alert("Ingrese los datos del seguro");
                let fecha=new Date(prompt(`Ingrese la fecha con formato (AÑO-MES-DIA)`)),
                monto=parseInt(prompt(`Ingrese el monto de a pagar al seguro:`,``)),
                tipo=prompt(`Ingrese el tipo de seguro`,``),
                nacionalidad=prompt(`Ingrese su nacionalidad:`,``);

                comprador=new PersonaC(codC,nam,apellido,placa,modelo,foto,ruat,fecha,monto,tipo,codC,nacionalidad);    
                compradores.push(comprador);
                
            }
        }if(crol==='vendedor'){
            codV++;
            let nombre=prompt(`Ingrese su nombre: `,``),
            apellido=prompt(`Ingrese su apellido: `,``),
            codigo=prompt(`Ingrese su código: `,``),
            cargo=prompt(`Ingrese su cargo: `,``);

            vendedor=new PersonaV(codV,nombre,apellido,codigo,cargo);
            vendedores.push(vendedor);
        }
        compp();
        vendd();
    }else {
        alert(`El valor, no es un valor válido.`);
    }


}

function PersonaV(cod,nam,apellido,codigo,cargo){
    this.codPersona=cod,
    this.nombre=nam,
    this.apellido=apellido,
    this.vendedor={
        codigo,
        cargo
    }
}
function PersonaC(cod,nam,apellido,placa,modelo,foto,ruat,fecha,monto,tipo,codigoC,nacionalidad){
    this.codPersona=cod,
    this.nombre=nam,
    this.apellido=apellido,
    this.vehiculo={
        placa,
        modelo,
        foto,
        ruat,
    },
    this.seguro={
        fecha,
        monto,
        tipo
    },
    this.comprador={
        codigoC,
        nacionalidad
    },this.vencseguro=function(){
        if(this.seguro.fecha>fechavencimiento){
            alert(`El seguro de: ${this.nombre} : a vencido!`);
        }if(this.seguro.fecha<=fechavencimiento){
            alert(`El seguro de: ${this.nombre} : aun no a vencido!`);
        }
    }
}
function añoadelante(){
    let cc=0;
        for(let i=0;i<compradores.length;i++){
            let vei=compradores[i];
            if(vei.vehiculo.modelo>2018){
                alert(`VEHICULOS DEL 2018 ADELANTE
                Vehiculo nro: ${i+1}
                PROPIETARIO: ${vei.nombre}
                PLACA: ${vei.vehiculo.placa}
                MODELO: ${vei.vehiculo.modelo}
                DIRECCION DE FOTO: ${vei.vehiculo.foto}
                RUAT: ${vei.vehiculo.ruat}`);
                cc++;
            }
        }
        if(cc==0){
            alert(`No existen vehiculos egistrados con modelo 2018 en adelante!`);
        }
}
function nargentina(){
    let cc=0;
    for(let i=0;i<compradores.length;i++){
        let vei=compradores[i];
        if(vei.comprador.nacionalidad=="argentina"){
            alert(`DUEÑOS CON NACIONALIDAD ARGENTINA
            Dueño nro: ${i+1}
            NOMBRE: ${vei.nombre}
            APELLIDO: ${vei.apellido}
            NACIONALIAD: ${vei.comprador.nacionalidad}`);
            cc++;
        }
    }
    if(cc==0){
        alert(`No existen dueños egistrados con nacionalidad argentina!`);
    }
}
function terminacerouno(){
    let cc=0;
    for(let i=0;i<compradores.length;i++){
        let vei=compradores[i];
        let plac=vei.vehiculo.placa;
        indice=plac.length;
        pla=plac[indice-1];
        if(pla==0 || pla==1){
            alert(`VEHICHULOS CON PLACAS CON TERMINACION 0 - 1
            Dueño nro: ${i+1}
            NOMBRE: ${vei.nombre}
            APELLIDO: ${vei.apellido}
            PLACA: ${vei.vehiculo.placa}
            MODELO: ${vei.modelo}`);
            cc++;
        }
    }
    if(cc==0){
        alert(`No existen registros de placas que terminen en 0 o 1`)
    }
}
function com(){
    let opc,
    elegido;
        let op=parseInt(prompt(`Escoga una opción!
        1) Función para determinar el vencimiento del seguro,
        2) Función para mostrar los vehículos 2018 adelante
        3) Función con los dueños con nacionalidad Argentina
        4) función para mostrar vehículos con placas que termine 0-1`));
        switch(op){
            case 1:
                opc=parseInt(prompt(`Escoga el numero de comprador: `,``));
                elegido=compradores[opc-1];
                elegido.vencseguro();
                break;
            case 2:
                añoadelante();
                break;
            case 3:
                nargentina();
                break;
            case 4:
                terminacerouno();
                break;
            default:
                alert(`Opcion no válida!`);
            }
           
}
function ven(){
    alert(`No hay funciones para vendedores:`);
}

