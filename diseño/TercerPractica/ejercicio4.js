let numerodeventas=parseInt(prompt("ingrese la cantidad de ventas del dia",""));
let suma=0,total=0;
function iva(numerodeventas){
    for(let i=0; i<numerodeventas;i++){
        let precio=parseInt(prompt("Ingrese el precio",""))
        suma=(suma+precio);
    }
    total=(suma*13)/100;
    console.log("suma total ventas bs: "+suma);
    console.log("suma total iva bs: "+total)
}
iva(numerodeventas);