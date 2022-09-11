function cargar(){
    let contenedor=document.getElementById("resultado");
    let p1=document.createElement("p");
    let p2=document.createElement("p");
    let p3=document.createElement("p");
    let p1texto=document.createTextNode("párrafo 1");
    let p1text2=document.createTextNode("parrafo 2");
    let p1text3=document.createTextNode("parrafo 3");
    p1.appendChild(p1texto);
    p2.appendChild(p1text2);
    p3.appendChild(p1text3);
    contenedor.appendChild(p1);
    contenedor.appendChild(p2);
    contenedor.appendChild(p3);

    let hh1=document.createElement("h1");
    let h1text=document.createTextNode("Hola amigo!");
    hh1.appendChild(h1text);
    contenedor.appendChild(hh1);

    let bt1=document.createElement("button");
    let bt1text=document.createTextNode("Click here!");
    bt1.appendChild(bt1text);
    contenedor.appendChild(bt1);
}
function conlist(){
    let contenedor=document.getElementById("resultado");
    let lista=document.createElement("ul");

    let link="https://developer.mozilla.org/es/docs/Web/HTML/Element/a";
    for(let i=0; i<5; i++){
        let li=document.createElement("li");
        let litext1=document.createTextNode(`elemento`);
        li.appendChild(litext1);
        lista.appendChild(li);

    }
    contenedor.appendChild(lista);
    let enlace=document.createElement("a");
    enlace.setAttribute("href","https://fontawesome.com/icons/trash-can?s=solid");
    let enlacetext=document.createTextNode("enlace");
    enlace.appendChild(enlacetext);
    contenedor.appendChild(enlace);

}
window.onload=conlist();

/*window.onload=cargar();*/