Algoritmo IfElse
	Imprimir 'Proporciona un numero: '
	Leer mi_numero
	// Verificamos si el numero es positivo
	Si mi_numero > 0 Entonces
		Imprimir 'Valor positivo: ', mi_numero
	SiNo
		Si mi_numero < 0 Entonces
			Imprimir 'Valor negativo: ', mi_numero
		SiNo
			Imprimir 'Valor es cero: ', mi_numero
		FinSi
	Fin Si
FinAlgoritmo
