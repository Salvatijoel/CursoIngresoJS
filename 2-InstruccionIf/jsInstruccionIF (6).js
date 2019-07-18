function mostrar()
{
//tomo la edad  

var edad 
edad = parseInt (document.getElementById("edad").value) ;

if (edad < 13) {
    alert ("Es niño.")
}

else if (edad < 17 ) { 
    alert ("Es adolescente.")


} 
else {
    alert ("Es adulto.")
}


}//FIN DE LA FUNCIÓN