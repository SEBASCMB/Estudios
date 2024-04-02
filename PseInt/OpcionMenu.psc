Algoritmo OpcionMenu
	Imprimir 'Seleccion una de estas opciones: '
	Imprimir '1. Sumar'
	Imprimir '2. Multiplicar'
	Imprimir '3. Salir'
	Leer selecciona
	expresion_logica = selecciona == 1 O selecciona == 2 o selecciona == 3
	Imprimir 'La seleccion ', selecciona, ' es una opcion valida? ', expresion_logica
FinAlgoritmo
