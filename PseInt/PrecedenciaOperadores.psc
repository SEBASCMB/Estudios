Algoritmo PrecedenciaOperadores
	// Prioridad de ejecucion de los operadores
	// 1. Parentesis ()
	// 2. Potencia ^
	// 3. Multiplicacion, division, modulo
	// 4. Suma y resta
	// 5. Operadores relaciones
	// 6. Operadores logicos
	
	a = 12 / 3 + 2 * 3 - 1
	// Paso 1. Division 12 / 3  = 4
	// Paso 2. Multiplicacion 2 * 3 = 6
	// Paso 3. Suma 4 + 6 = 10
	// Paso 4. Resta 10 - 1 = 9
	imprimir 'Resultado de evaluar: ', a
	
	// Ej. aplicando parentesis
	// Paso 1. Parentesis Suma: (3 + 2) = 5
	// Paso 2. Parentesis Resta: (3 - 1) = 2
	// Paso 3. Division 12 / 5 = 2.4
	// Paso 4. Multiplicacion  2.4 * 2 = 4.8
	a = 12 / (3 + 2) * (3 - 1)
	Imprimir 'Resultado a evaluar: ', a
FinAlgoritmo
