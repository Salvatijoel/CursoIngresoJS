function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero ;
	var seguir = 's'

		while (seguir == 's') {

			numero = parseInt (prompt("Ingrese un numero")); 

			while ( isNaN(numero)) {
				
				alert ("No es un numero") ;
				numero = parseInt (prompt("Ingrese un numero")); 
			}

			acumulador = acumulador + numero ;

			contador++ ;

			seguir = prompt ("Quiere ingresar otro numero?")
			
		}
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN