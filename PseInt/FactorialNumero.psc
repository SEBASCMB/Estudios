Algoritmo FactorialNumero
	// Calcular el factorial de un numero positivo, Ej: 5! (cinco factorial)
	// El factorial se calcula con la multiplicacion de los numeros naturales anteriores o iguales
	// Factorial de 0! = 1
	// 5! = 5*4*3*2*1 = 120
	Definir numero_var, factorial, factorial_resultado Como Entero
	factorial = 5
	numero_var = 1
	factorial_resultado = 1
	Mientras numero_var <= factorial Hacer
		Imprimir "(factorial_resultado * numero_var)", factorial_resultado " * ", numero_var
		factorial_resultado = factorial_resultado * numero_var
		Imprimir "Resultado parcial factorial = ", factorial_resultado
		numero_var = numero_var + 1
	FinMientras
	Imprimir "Factorial de ", factorial, '! es = ', factorial_resultado
FinAlgoritmo
