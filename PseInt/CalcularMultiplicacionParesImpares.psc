Algoritmo CalcularMultiplicacionParesImpares
	Definir numero_var, mul_pares, mul_impares Como Entero
	mul_pares = 1
	mul_impares = 1
	Para numero_var = 1 Hasta 6 Con Paso 1 Hacer
		Si numero_var MOD 2 == 0 Entonces
			Imprimir "(mul_pares * numero_var)", mul_pares, ' * ', numero_var
			mul_pares = mul_pares * numero_var
			Imprimir "Multiplicacion pares parcial: ", mul_pares
		SiNo
			Imprimir "(mul_impares * numero_var)", mul_impares, ' * ', numero_var
			mul_impares = mul_impares * numero_var
			Imprimir "Multiplicacion impares parcial: ", mul_impares
		FinSi
	FinPara
	Imprimir "Multiplicacion numeros pares 1 al 6 = ", mul_pares
	Imprimir "Multiplicacion numeros impares 1 al 6 = ", mul_impares
FinAlgoritmo
	