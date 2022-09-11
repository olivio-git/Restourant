function cambiar(){
    let titul=document.querySelector('h1');
    titul.style.background="blue";
    document.body.style.background="black";
    document.getElementById('parrafo').textContent="Texto alternativo!";
    console.log(document.getElementById('parrafo').textContent);
    let parrafo=document.getElementById('parrafo');
    parrafo.style.background="blue";
    parrafo.style.color="yellow";
    document.querySelector('h1').textContent="Fmundo";
    console.log(document.querySelector('h1').textContent);
}