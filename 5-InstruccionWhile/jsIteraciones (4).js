function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
		
		while (numero < 0 || numero > 10) {

			alert ("Numero incorrecto") ;
			numero = prompt ("Ingrese otro numero: ") ;
		}
	
	alert ("Clave correcta: " + numero)
	


}//FIN DE LA FUNCIÓN