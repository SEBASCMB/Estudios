Algoritmo CicloRepetirHasta
	// Validar que el usuario proporcione un valor positivo
	Repetir
		Imprimir 'Proporcione un numero positivo'
		Leer numero
		Imprimir 'Condicion a evaluar: ', numero, ' > 0 = ', numero > 0
	Hasta Que numero > 0
	// Salimos del ciclo
	Imprimir 'Valor positivo: ', numero
FinAlgoritmo
