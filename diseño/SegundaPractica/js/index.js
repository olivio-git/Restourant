let hora=prompt("Ingrese la cantidad de horas que trabaja","");
const th=56.6;
let st;
let hor=parseFloat(hora)
if(hor>40){
    let sp=(hora-40)*th*2;
    st=2264+sp;
    
    console.log("1")
}
else{
    st=hora*th;
   
    console.log("2")
}
alert(`Su sueldo es igual: ${st}`);