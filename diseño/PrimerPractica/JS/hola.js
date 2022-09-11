
let hora=prompt("Ingrese la cantidad de horas que trabaja","");
const th=56.6;
if(parseFLoat(hora)>40){
    let sp=(hora-40)*th*2;
    let st=2264+sp;
    alert(`Su sueldo es igual: ${st}`);
    console.log("1")
}
else{
    let st=hora*th;
    alert(`Su sueldo es igual: ${st}`);
    console.log("2")
}




