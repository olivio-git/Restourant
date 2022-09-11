function afectaraldom(){
    let parrafo=document.getElementById('parrafo');
    parrafo.style.color="red";
    console.log("DOM");
    let nombr=prompt("ingrese su nombre","");
    let apellid=prompt("ingrese su apellido","");
    document.getElementById('nombre').textContent=nombr;
    document.getElementById('apellido').textContent=apellid;
    let nom=document.getElementById('nombre');
    let ape=document.getElementById('apellido');
    nom.style.fontFamily="Coursive";
    ape.style.fontFamily="Coursive";
    nom.style.color="Aqua";
    ape.style.background="Blue";

}