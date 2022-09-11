let minutos,segundos,min,hor;

for(let i=0;i<2;i++){
    minutos =parseInt(prompt("Ingrese el tiempo en minutos!: ","")),
    segundos=parseInt(prompt("Ingrese el tiempo en segundos!: ","")),
    nombre=prompt("Ingrese el nombre del atleta: ");
    function atleta(minutos,segundos,nombre){
        min=(segundos/60)+minutos;
        hor=(min/60);
        var hora=hor.toFixed(1);
        var minu=Math.trunc(min);
        document.write("EL atleta: "+nombre+"<br/>"+"el total en horas es: "+
        hora+""+"<br/>"+" minutos es: "+minu+"<br/>"+" segundos: "+segundos+"<br/>"+"<br/>");
    }
    atleta(minutos,segundos,nombre);
}

