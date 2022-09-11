let stock=parseInt(prompt("Ingrese el stock!","")),
fecha=new Date(prompt("Ingrese la fecha Formato:YY-MM-DD","")),
nprod=parseInt(prompt("Ingrese el numero de productos a buscar")),
cont=0;

const array=[];
for(let i=0; i<nprod;i++){
    let id=prompt("Ingrese el id del producto","");
    array.push(id);
}
function Producto(id,numero,fecha){
    let idProducto="1029LM";
    this.descripcion="Lote de manzanas rojas <3";
    let stock="12";
    let fechavencimiento=new Date(`2022-08-15`);
    this.getStock=function(){
        return stock;
    }
    this.comparar=function(){
        if(numero>stock){
            console.log("Stock Agotado");
            document.write("STOCK AGOTADO! <br/><br/>");
        }if(numero<=stock){
            if(numero<stock){
                document.write("SI HAY STOCK! <br/><br/>");
            }else if(numero==stock){
                document.write("SI HAY STOCK! <br/><br/>")
            }
        }
    }
    this.compararid=function(){
        for(let i=0; i<id.length; i++){
            if(id[i]==idProducto){
                document.write(`EL PRODUCTO: ${i+1} INGRESADO SI EXISTE!  <br/><br/>`);
                console.log("SI EXISTE EL PRODUCTO! <br/>");
            }else if(id[i]!=idProducto){
                document.write(`EL PRODUCTO: ${i+1} INGRESADO NO EXISTE!  <br/><br/>`)
            }
        }
    }
    this.compararfecha=function(){
        if(fecha<=fechavencimiento){
            console.log("LA FECHA SIGUE VIGENTE!")
            document.write("LA FECHA SIGUE VIGENTE! <br/><br/>")
        }else if(fecha>fechavencimiento){
            document.write("LA FECHA YA NO ESTA VIGENTE! <br/><br/>")
            console.log("La fecha es mayor!");
        }
    }
}
let Objeto1=new Producto(array,stock,fecha)
Objeto1.comparar();
Objeto1.compararid();
Objeto1.compararfecha();