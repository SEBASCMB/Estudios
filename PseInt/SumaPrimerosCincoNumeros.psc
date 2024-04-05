Algoritmo SumaPrimerosCincoNumerosCicloMientras
	// Realizar el mismo ejercicio de sumar primeros 5 numeros pero con el Ciclo Mientras 
	Definir numero, acumulador_suma, max Como Entero
	acumulador_suma = 0
	max = 5
	numero = 1 // Se inicializa fuera del ciclo
	Mientras numero <= max Hacer
		Imprimir '()acumulador_suma + numero) = ', acumulador_suma, ' + ', numero
		acumulador_suma = acumulador_suma + numero
		Imprimir 'Suma parcial acumulada: ', acumulador_suma
		numero = numero + 1
	FinMientras
FinAlgoritmo
