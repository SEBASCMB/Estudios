Algoritmo ElMayorDeTresNumero
	Definir numero1, numero2 Como Entero
	Escribir ('Proporciona el Numero 1: ')
	Leer numero1
	Escribir ('Proporciona el Numero 2: ')
	Leer numero2
	Escribir ('Proporciona el Numero 3: ')
	Leer numero3
	Si numero1 > numero2 Y numero1 > numero3 Entonces
		Escribir ('Numero 1 es mayor: '), numero1
	SiNo
		Si numero2 > numero1 Y numero2 > numero3 Entonces
			Imprimir 'El numero 2 es el mayor: ', numero2
		SiNo
			Imprimir 'El numero 3 es el mayor: ', numero3
		Fin Si
	Fin Si
FinAlgoritmo
