function mostrar()
{	var respuesta = true
	var contador = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var promedioNegativos;
	var promedioPositvos;
	var numero ;
	

	while (respuesta==true) {
		numero = parseInt(prompt ("Ingrese un numero"));
		
		if (numero > 0) {
			contadorPositivos ++ ;
			acumuladorPositivos = acumuladorPositivos + numero;
			// acumuladorPositivos += numero;
		}
		
			else 
			{ 
				if  (numero < 0)
				{ contadorNegativos ++;
				acumuladorNegativos = acumuladorNegativos + numero;

				}
				else  {
					contadorCeros++
						}
			
			}
	
	if (numero%2==0)
	{
		contadorPares++
	}
	respuesta = confirm ("Desea ingresar otro número?")	
			
	}
	if (contadorPositivos !=0) {

	promedioPositivos = acumuladorPositivos / contadorPositivos ;
	
	}

		else {
			promedioPositivos = "No se ingresaron numeros positivos"
		     }

 	if (contadorNegativos !=0) {
		 promedioNegativos = acumuladorNegativos / contadorNegativos ;
							   }
	
		else {
		promedioNegativos = "No se ingresaron numeros Negativos"
			}

	document.write ("1. Suma de los Positivos: " + acumuladorPositivos + "<br>");
	document.write ("2. Suma de los Negativos: " + acumuladorNegativos + "<br>");
	document.write ("3. Cantidad de positivos: " + contadorPositivos + "<br>");
	document.write ("4. Cantidad de Negativos: " + contadorNegativos + "<br>");
	document.write ("5. Cantidad de Ceros: " + contadorCeros + "<br>");
	document.write ("6. Cantidad de Pares: " + contadorPares + "<br>");	
	document.write ("7. Promedio de positivos: " + promedioPositivos + "<br>");
	document.write ("8. Promedio de negativos: " + promedioNegativos + "<br>");

}//FIN DE LA FUNCIÓN