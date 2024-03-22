Algoritmo EjemploValidarDentroRango
	// Definicion variables
	minimo = 0
	maximo = 5
	// verificar si el dato proporcionado esta dentro de rango
	Imprimir "Proporciona un valor entero entre: 0 y 5"
	Leer  dato
	// Verificar si esta dentro de rango
	dentro_rango = dato >= minimo Y dato <= maximo
	Imprimir "Valor dentro de rango: ", dentro_rango
FinAlgoritmo
