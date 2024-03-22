Algoritmo OperadoresLogicos
	a = Falso
	b = Falso
	Imprimir " Valor a: ", a
	Imprimir "Valor b: ", b
	
	// Operador logico Y
	// Regresa verdadero si ambos operandos son verdaderos
	c = a Y b
	Imprimir "Expresion evaluar (Y): ", a, " Y ", b
	Imprimir "Resultado Operador Y (AND): ", c
	// Operador logico O
	// Regresa verdadero si al menos uno es verdadero
	c = a O b
	Imprimir "Expresion evaluar (O): ", a " O ", b
	Imprimir "Resultado operador O (OR): ", c
	// Operador logico NO
	c = NO a 
	Imprimir "Expresion evaluar (NO): ", a " NO "
	Imprimir "Resultado operador NO (NOT): ", c
FinAlgoritmo
