function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandom = Math.floor( Math.random() * 10 + 1) ;
	
	if ( numeroRandom >= 9) {
		alert ("Excelente. Su nota es un " + numeroRandom)

	}
	
	else if (numeroRandom >= 4) {
		alert ("Aprobó. Su nota es un " + numeroRandom)
	}

	else {
		alert ("Vamos, la próxima se puede. Su nota es un " + numeroRandom)
	}

}//FIN DE LA FUNCIÓN