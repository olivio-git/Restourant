let nombre=prompt("Ingrese el nombre",""),apellido=prompt("Ingrese el apellido"),
edad=parseInt(prompt("ingrese la edad","")),
direccion=prompt("Ingrese su direccion:","");
function Persona(nombre,apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    let direccion="";
    this.getDireccion=function(){
        return direccion;
    }
    this.mostrarDatos=function(){
        alert(`mi nombre es: ${nombre} 
               mi apellido es: ${apellido} 
               mi edad es: ${edad}
               mi direccion es: ${this.getDireccion}`)
    }
}
let objeto1=new Persona(nombre,apellido,edad);
objeto1.getDireccion=direccion;
objeto1.mostrarDatos();


