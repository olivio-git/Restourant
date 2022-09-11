let familia=prompt("Nombre de la familia: ",""),
cantidadhijos=parseInt(prompt("Ingrese la cantidad de hijos","")),
estadomadre=prompt("La madre es viuda? responder (si) o (no)","");
const arrayhijos=[],
arraydiesiocho=[],
arraymayordiesiocho=[];
let contone=0,
contwo=0,conthree=0,
sum=0;
function suma(cantidadhijos,estadomadre){
    if(cantidadhijos==1 || cantidadhijos==2){
        sum=70;
        document.write("Por la cantidad de hijos: "+cantidadhijos+"Recibira: "+sum+"bs<br/>");
        if(estadomadre=="si"){
            sum=sum+20;
            document.write("Siendo una madre viuda recibira: "+20+"bs mas en total: "+sum+"bs<br/>");
        }
    }
    if(cantidadhijos>=3 && cantidadhijos<=5){
        sum=90;
        document.write("Por la cantidad de hijos: "+cantidadhijos+"Recibira: "+sum+"bs<br/>");
        if(estadomadre=="si"){
            sum=sum+20;
            document.write("Siendo una madre viuda recibira: "+20+"bs mas en total: "+sum+"bs<br/>");
        }
    }if(cantidadhijos>=6){
        sum=120;
        document.write("Por la cantidad de hijos: "+cantidadhijos+"Recibira: "+sum+"bs<br/>");
        if(estadomadre=="si"){
            sum=sum+20;
            document.write("Siendo una madre viuda recibira: "+20+"bs mas en total: "+sum+"bs<br/>");
        }
    }
}
suma(cantidadhijos,estadomadre);
function sumarmenor(ingreso,edad,siono){
    console.log("Entro!");
    arrayhijos.push(ingreso);

    if(edad>18){
        arraymayordiesiocho.push(ingreso);
        document.write(`Mayores a 18: ${arraymayordiesiocho[contone]}`);
        contone++;
    }if(edad>=6 || edad<=18){
        if(siono=="si"){
        arraydiesiocho.push(ingreso);
        document.write(`Por su hij@: ${arraydiesiocho[contwo]} recibira 10bs mas:<br/>`);
        sum=sum+10;
        document.write("En total recibira: "+sum+"bs mensual.<br/>");     
        contwo++;
        }
    }
}
for(let i=0;i<cantidadhijos;i++){
    let ingreso=prompt("Ingrese el nombre de su hij@",""),
    edad=parseInt(prompt(`Ingrese la edad de su hij@ ${ingreso}`,``)),
    siono=prompt("El niñ@ asiste a la escuela?","");
    sumarmenor(ingreso,edad,siono);
}

