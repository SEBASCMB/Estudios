Algoritmo MultiplicarPimeros5Numeros
	Definir numero, acumulador_mul Como Entero
	acumulador_mul = 1
	Para numero = 1 Hasta 5 Con Paso 1 Hacer
		Imprimir '(acumulador_mul + numero) = ', acumulador_mul, ' * ', numero
		acumulador_mul = acumulador_mul * numero
		Imprimir 'Multipliacion parcial acumlada: ', acumulador_mul
	FinPara
	Imprimir 'Multiplicacion total: ', acumulador_mul
FinAlgoritmo
