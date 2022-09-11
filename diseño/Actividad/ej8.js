function tv(){
    let sitv=parseInt(prompt("Ingrese el numero de personas que si tienen TV!: ","")),
    notv=parseInt(prompt("Ingrese el numero de personas que no tienen TV!: ",""));
    if(sitv>notv){
        let tvporc=(notv*sitv)/100;
        document.write("El porcentaje de personas que no tienen TV sobre las personas que si tienen es: "+tvporc+"%<br/>");
    }else if(sitv<notv){
        let tvporc=(sitv*notv)/100;
        document.write("El porcentaje de personas que si tienen TV sobre las personas que no tienen es: "+tvporc+"%<br/>");
    }
}
function internet(){
    siinternet=parseInt(prompt("Ingrese el numero de personas que si tienen internet")),
    nointernet=parseInt(prompt("Ingrese el numero de personas que no tienen internet"));
    if(siinternet>nointernet){
        let intporc=(nointernet*siinternet)/100;
        document.write("El porcentaje de personas que no tienen internet sobre las que si tienen es: "+intporc+"%<br/>");
    }else if(siinternet<nointernet){
        let intporc=(siinternet*nointernet)/100;
        document.write("El porcentaje de personas que si tienen internet sobre las que no tienen es: "+intporc+"%<br/>");
    }
    
}
function conectarse(){
    siconectarse=parseInt(prompt("Ingrese el numero de personas que desean conectarse")),
    noconectarse=parseInt(prompt("Ingrese el numero de personas que no desean conectarse"));
    if(siconectarse>noconectarse){
        let conporc=(noconectarse*siconectarse)/100;
        document.write("El porcentaje de personas que no quieren conectarse sobre las personas que si quieren es: "+conporc+"%<br/>");
    }else if(siconectarse<noconectarse){
        let conporc=(siconectarse*noconectarse)/100;
        document.write("El porcentaje de personas que si quieren conectarse sobre las personas que no quieren es: "+conporc+"%<br/>");
    }
}
tv();
internet();
conectarse();
