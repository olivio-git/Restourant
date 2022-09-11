let numero=parseInt(prompt("ingrese el numero de peliculas a agregar! maximos 6: ",1));
function lista(){
    let contenedor=document.getElementById("contenedor"),
        lista=document.createElement("ul"),
        colors=["red","green","yellow","blue","purple","orange"];
        document.body.style.background="red";
    for(let i=0;i<numero;i++){
        let nombre=prompt("ingrese el nombre de la pelicula!",""),
        li=document.createElement("li");
        litext=document.createTextNode(nombre);
        li.appendChild(litext);
        li.style.color=colors[i];
        li.style.fontWeight="bold";
        li.style.fontFamily="Arial, Helvetica, sans-serif"
        lista.appendChild(li);
    }
    let button=document.createElement("button");
    button.style.width="100px";
    button.style.height="40px";
    button.style.background="purple";
    button.style.color="white";
    button.style.border="none";
    button.style.position="absolute";
    button.style.float="left";
    button.style.marginLeft="100px";
    let textbtn=document.createTextNode("Click Here!");
    button.appendChild(textbtn);
    contenedor.appendChild(lista);
    contenedor.appendChild(button);
    contenedor.setAttribute("style","")
}
window.onload=lista();