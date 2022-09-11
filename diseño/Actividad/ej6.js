let litros=parseInt(prompt("Ingrese la cantidad en litros del primer tanque: ","0"));

if(litros!=0){
    function conv(litros){
    let yardas=parseInt(prompt("Ingrese la cantidad en yardas del segundo tanque: ","0"));
    let litros75=(litros*75)/100,
    litros25=(litros*25)/100,
    yardas75=(yardas*75)/100,
    yardas25=(yardas*25)/100,
    lmc=(litros*0.001),
    ymc=(yardas*0.76455),
    lmc75=(lmc*75)/100,
    lmc25=(lmc*25)/100,
    ymc75=(ymc*75)/100,
    ymc25=(ymc*25)/100,
    lpc=(litros*0.0353147),
    ypc=(yardas*27),
    lpc75=(lpc*75)/100,
    lpc25=(lpc*25)/100,
    ypc75=(ypc*75)/100,
    ypc25=(ypc*25)/100;
    document.write(litros+" Litros equivalen a :"+lmc+" metros cúbicos <br/>");
    document.write(yardas+" Yardas equivalen a :"+ymc+" metros cúbicos <br/><br/>");

    document.write("De los: "+litros+" litros convertidos a m3="+lmc+"<br/>se usan "+lmc75+" m3 dedicados al uso domestico y<br/>"+
    lmc25+" m3 dedicados al riego <br/><br/>");
    document.write("De las: "+yardas+" yardas convertidas a m3="+ymc+"<br/>se usan "+ymc75+" m3 dedicadas al uso domestico y<br/>"+
    ymc25+" m3 dedicadas al riego <br/><br/>");
    document.write("De los: "+litros+" litros convertidos a p3="+lpc+"<br/>se usan "+lpc75+" p3 dedicados al uso domestico y<br/>"+
    lpc25+" p3 dedicados al riego <br/><br/>");
    document.write("De las: "+yardas+" yardas convertidas a p3="+ypc+"<br/>se usan "+ypc75+" p3 dedicados al uso domestico y<br/>"+
    ypc25+" p3 dedicados al riego <br/><br/>");
    }

    conv(litros)

}else document.write("Ingrese un numero distinto a: 0");

