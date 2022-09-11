let edad=parseInt(prompt("ingrese su edad?:",""));
if(edad>=18){
    let lenguaje=prompt("ingrese su lenguaje","")
    function pr(edad,lenguaje){
        if(edad>=18){
            if(lenguaje=="javascript"){
            document.write("EL estudiante esta preparado")
            }
            if(lenguaje!="javascript"){
                document.write("EL estudiante esta capacidato!")
            }
        }if(edad<18){
            document.write("EL estudiante no cumple los requisitos!")
        }
    }
    pr(edad,lenguaje)
}
if(edad<18){
    document.write("EL estudiante no cumple con los requisitos")
}