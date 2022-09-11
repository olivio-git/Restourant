let numero=parseInt(prompt("Ingrese un numero para su comprobación!0",""));

function comprobar(numero){
    if(numero){
        if(numero<1){
            document.write("El numero es negativo!");
        }if(numero>1){
            document.write("El numero es positivo!");
        }
    }else document.write("El numero es Null");
}
comprobar(numero);