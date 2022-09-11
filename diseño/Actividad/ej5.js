let pies=parseInt(prompt("Ingrese la cantidad en pies: ","0"));
function conversion(pies){
    if(pies!=0){
        let metros=parseInt(prompt("Ingrese la cantidad en metros",""));
        let pulgadas=(pies*12),
        yardas=(pies*1)/3,
        met=(pies*0.3040),
        metro=met.toFixed(2),
        milla=(pies*0.000189394);

        let mpulgadas=(metros*39.370),
        myardas=(metros*1.0936),
        mmetro=metros,
        mmillas=(metros*0.00062137);

        sumaone=Math.trunc(pulgadas+mpulgadas);
        sumatwo=Math.trunc(yardas+myardas);
        sumathree=Math.trunc(metro+mmetro);
        sumafoor=(milla+mmillas);
        document.write("Suma de pies a pulgadas,metros a pulgadas: "+sumaone+"<br/>");
        document.write("Suma de pies a yardas,metros a yardas: "+sumatwo+"<br/>");
        document.write("Suma de pies a metros, y metros: "+sumathree+"<br/>");
        document.write("Suma de pies a millas,metros a millas: "+sumafoor+"<br/>");
    }
    else document.write("Ingrese un numero distinto a : 0 ");
}
conversion(pies);
