let ventana,ancho,alto;
function AbreVentana(){
    ancho=window.prompt("Que ancho quieres colocar!","");
    alto=window.prompt("Ingrese el alto de la ventana","");
    ventana=window.open("https://www.php.net","",`width=${ancho} height=${alto}`);
}