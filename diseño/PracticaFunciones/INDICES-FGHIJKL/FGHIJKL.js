function Dom(){
    let contenedor=document.getElementById('container'),
    h1=document.createElement("h1"),
    h1txt=document.createTextNode("JAVASCRIPT");
    h1.appendChild(h1txt);
    contenedor.appendChild(h1);
    contenedor.style.background="aqua";
    let p=document.createElement("p"),
    ptxt=document.createTextNode("Entre las ventajas tenemos"),
    lista=document.createElement("ul");
    p.appendChild(ptxt);
    contenedor.appendChild(p);
    let colors=["red","green","blue","yellow","blue","orange","red","pink","white"];
    let ventajas=["Velocidad","Simplicidad","Popularidad","Compatibilidad","Server Load","Versatilidad"];
    for(let i=0; i<ventajas.length;i++){
        li=document.createElement("li");
        litxt=document.createTextNode(ventajas[i]);
        li.appendChild(litxt);
        li.style.color=colors[i];
        lista.appendChild(li);
        p.style.color=colors[i];
    }
    contenedor.appendChild(lista);
    p2=document.createElement("p");
    ptxt2=document.createTextNode("Las desventajas son");
    p2.appendChild(ptxt2);
    contenedor.appendChild(p2);
    let numero=parseInt(prompt(`Ingrese el numero de deventajas a ingresar!`,``)),
    lista2=document.createElement("ul");
    for(let i=0; i<numero;i++){
        let desventaja=prompt(`Ingrese la descentaja nro: ${i+1}`);
        let li=document.createElement("li"),
        litxt=document.createTextNode(desventaja);
        li.appendChild(litxt);
        li.style.color=colors[i];
        lista2.appendChild(li);
        p2.style.color=colors[i+1];
    }
    contenedor.appendChild(lista2);
    let enlace=document.createElement("a");
    enlace.setAttribute("href", "https://www.javascript.com/");
    enlacetxt=document.createTextNode("Enlace a la pagina de Javascript!");
    enlace.appendChild(enlacetxt);
    contenedor.appendChild(enlace);

}
window.onload=Dom();