function saludar(nombre,apellido,edad){

    alert("Hola mi nombre es "+nombre);
    alert(`Mi apellido es ${apellido} y mi edad ${edad}`)
}


let nombre=prompt("ingrese su nombre",""),
apellido=prompt("ingrese su apellido",""),
edad=prompt("ingrese su edad","")
saludar(nombre,apellido,edad)
function saludo(){
    document.getElementById('h1').innerHTML=nombre;
}

function cargar(array){
    const vector=[];
    let suma=0;
    for(i=0;i<array.length;i++){
        vector.push(array[i])
        
        suma=suma+array[i];
        
        console.log(suma)
    }
    return vector;
}
cargar([1,2,5,7])
