let rand=Math.floor(Math.random()*100);
let valor=rand;
alert(valor);
for(i=0; i<=15; i++){
    let Numero =prompt("Ingrese numero","")
    let num=parseInt(Numero);
    if(Numero==valor){
        document.write("NUmero correcto:")
        break;
    }else document.write("NUmero incorrecto");
}