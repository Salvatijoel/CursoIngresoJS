function mostrar()
{

var sexo = prompt("ingrese f ó m .");
    
    while (sexo != 'f' && sexo != 'm') {
    
        alert ("Datos invalidos. ")
    
        sexo = prompt ("Reingrese sexo f ó m")
    }



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN