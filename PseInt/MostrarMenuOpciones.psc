Algoritmo MostrarMenuOpciones
	Definir seleccion Como Entero
	Repetir
		Imprimir 'Menu: '
		Imprimir '1. Saludar'
		Imprimir '2. Salir'
		Repetir
			Imprimir 'Proporcione opcion: '
			Leer seleccion
			condicion_sel = seleccion == 1 O seleccion == 2
			Si NO condicion_sel Entonces
				Imprimir 'Opcion seleccionada erronea...'
			Fin Si
		Hasta Que condicion_sel
		Segun seleccion Hacer
			1:
				Imprimir 'Saludos...'
			2:
				Imprimir 'Hasta pronto...'
			De Otro Modo:
		Fin Segun
	Hasta Que seleccion == 2
FinAlgoritmo
	