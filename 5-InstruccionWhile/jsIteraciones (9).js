function mostrar()
{
/*
	var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		
	
	} */

var numero ;
var maximo = 0;
var minimo = 0;
var flag = 0;

	do {
		numero = parseInt(prompt("Ingrese un numero"));
		
			if (numero > maximo || flag == 0) {
				 
				 maximo = numero;
				
										  }
		 

			if (numero < minimo || flag == 0) {
				
				minimo = numero; 
				flag = 1;
										  }

										
		seguir = prompt ("Si desea ingresar otro numero ingrese s ");
	} while (seguir == 's');

	document.getElementById("minimo").value=minimo;
	document.getElementById('maximo').value=maximo;



}//FIN DE LA FUNCIÓN