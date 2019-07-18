function mostrar()
{

//	var acumulador = 0 no es necesario
//	var contador=0;

	var positivo=0;
	var negativo=1;
	var contadorNegativos=0; //
	var numero ;
	var seguir ;
	// no hace falta inicializar var seguir = 's'

		do { //transforme el while a dowhile 

			numero = parseInt (prompt("Ingrese un numero")); 

			while ( isNaN(numero)) {
				
				alert ("No es un numero") ;
				numero = parseInt (prompt("Ingrese un numero")); 
			}

			//uso if para hacer lo pedido de positivos y negativos 

				if (numero >= 0) {

			  postivo = positivo + numero ;
			  // postivo += numero 
			  		
					  seguir = prompt ("Quiere ingresar otro numero?");
			
								}

			else { 

				negativo = negativo * numero ;
			
			
				// negativo *= numero 
		
				contadorNegativos++
				// en lugar de contador de negativos se puede usar flag
						 seguir = prompt ("Quiere ingresar otro numero?");
				}
		 
					while  (seguir == 's'); 

					document.getElementById('suma').value=positivo;
					if (contadorNegativos == 0){
							negativo = 0;
					}

document.getElementById('producto').value=negativo;






//FIN DE LA FUNCION