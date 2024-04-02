Algoritmo IntercambioValores
	// 1. Solicitamos los valores de entrada
	Imprimir 'Proporcione el valor de a: '
	Leer a
	Imprimir 'Proporcione el valor de b: '
	Leer b
	// 2. Hacer el intercambio de los valores
	// a = b si hacemos esto se pierde el valor de la varibale a
	// Antes de perder el valor de a, tenemos que respaldarlo
	temp = a
	a = b
	b = temp
	Imprimir 'Nuevo valor a: ', a
	Imprimir 'Nuevo valor b: ', b
FinAlgoritmo
