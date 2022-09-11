
function peliculas(){
    let content=document.getElementById("resultado");
    let lista=document.createElement("ul");
    let p1=document.createElement("p");
    let p2=document.createElement("p");
    let p3=document.createElement("p");
    let p1text=document.createTextNode("Parrafo 1");
    let p2text=document.createTextNode("parrafo 2");
    let p3text=document.createTextNode("parrafo 3");
    p1.appendChild(p1text);
    p2.appendChild(p2text);
    p3.appendChild(p3text);
    p1.style.color="red";
    p2.style.color="blue";
    p3.style.color="orange";


    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);

    let name=[];
    for(let i=0;i<3;i++){
        let nombre=prompt(`ingrese el nombre de la pelicula${i+1}`,``);
        let li=document.createElement("li");
        let litext=document.createTextNode(`pelicula: ${i+1} :`+nombre);
        li.appendChild(litext);
        lista.appendChild(li);
        li.style.fontSize="50px";
        name.push(nombre);
    }
    let enlace1=document.createElement("a");
    enlace1.setAttribute("href","https://fontawesome.com/icons/trash-can?s=solid");
    let text1=document.createTextNode(`${name[0]}`);
    enlace1.appendChild(text1);
    content.appendChild(enlace1);

    let espace=document.createElement("br");
    content.appendChild(espace);
    let enlace2=document.createElement("a");
    enlace2.setAttribute("href","https://fontawesome.com/icons/trash-can?s=solid");
    let text2=document.createTextNode(`${name[1]}`);
    enlace2.appendChild(text2);
    content.appendChild(enlace2);
    let espace1=document.createElement("br");
    content.appendChild(espace1);
    let enlace3=document.createElement("a");
    enlace3.setAttribute("href","https://fontawesome.com/icons/trash-can?s=solid");
    let text3=document.createTextNode(`${name[2]}`);
    enlace3.appendChild(text3);
    content.appendChild(enlace3);

    content.appendChild(lista);
}
window.onload=peliculas();