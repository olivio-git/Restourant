let imagenes=[];
let cont=0;
let encontrados=[];
$(document).ready(function(){
    $('#form').submit(function (e) { 
        e.preventDefault();
        let nombre=$('#nombre').val(),
        descripcion=$('#descripcion').val(),
        tamaño=$('#tamaño').val(),
        foto=$('#foto').val(),
        tipo=$('#tipo').val();
        if(nombre!=""){
            if(descripcion!=""){
                if(tamaño>=10){
                    if(foto!=""){
                        if(tipo!=""){
                            let imagen1=new imagen(nombre,descripcion,tamaño,foto,tipo);
                            imagenes.push(imagen1);
                            cont++;
                            alert("Imagen agregada con exito!");
                        }else{
                            alert("faltan datos");
                        }
                    }else{
                        alert("faltan datos");
                    }
                }else{
                    alert("faltan datos,o el tamaño es incorrecto");
                }
            }
            else{
                alert("faltan datos");
            }
        }else{
            alert("faltan datos");
        }
    });

})
function mostrarimagenes(){
    let lista=document.createElement('ul');
    let contenedor1=document.getElementById('contenedor2');
    for(let i=0;i<imagenes.length;i++){
        let h1=document.createElement('h5');
        let ulnombre=document.createElement('li');
        let ultamaño=document.createElement('li');
        let tipo=document.createElement('li');
        let imagen=imagenes[i];
        let ulntxt=document.createTextNode(imagen.nombre);
        let ulttxt=document.createTextNode(imagen.tamaño);
        let tipotxt=document.createTextNode(imagen.tipo);
        let h1txt=document.createTextNode(`Imagen numero${i+1}`);
        h1.appendChild(h1txt);
        lista.appendChild(h1);
        ulnombre.appendChild(ulntxt);
        ulnombre.style.color="red";
        ultamaño.appendChild(ulttxt);
        tipo.appendChild(tipotxt);
        lista.appendChild(ulnombre);
        lista.appendChild(ultamaño);
        lista.appendChild(tipo);
    }
    contenedor1.appendChild(lista);
}
function imagen(n,d,t,f,tip){
    this.nombre=n;
    this.descripcion=d;
    this.tamaño=t;
    this.foto=f;
    this.tipo=tip;
}
$('#btnmostrar').click(function (e) { 
    e.preventDefault();
    mostrarimagenes();
});
$('#buscar').click(function (e) { 
    e.preventDefault();
    buscar();

});
function buscar(){
    let elemento=document.getElementById('busc').value;
    console.log(elemento);
    for(let i=0;i<=imagenes.length;){
        let imagen=imagenes[i];
        if(elemento===imagen.nombre){
            encontrados.push(imagen);
        }
    }
    for(let y=0;y<=encontrados.length;y++){
        console.log(encontrados[y].nombre,descripcion,tamaño,tipo);
    }
}