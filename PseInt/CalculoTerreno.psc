Algoritmo CalculoTerreno
	Definir ancho, largo, precio_m2, area, precio_total Como Real
	Imprimir 'Programa para calcular el precio de un terreno'
	Imprimir 'Escriba el ancho del terreno (metros): '
	Leer ancho
	Imprimir 'Escriba el largo del terreno (metros): '
	Leer largo
	Imprimir 'Escriba el precio por metro cuadrado: '
	Leer precio_m2
	area = ancho * largo
	precio_total = area * precio_m2
	Imprimir 'Area del terreno: ', area
	Imprimir 'Precio del terreno: ', precio_total
FinAlgoritmo
