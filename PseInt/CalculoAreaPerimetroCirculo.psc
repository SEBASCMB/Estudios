Algoritmo CalculoAreaPerimetroCirculo
	// 1. Solicitamos los valores al usuario
	Imprimir 'Proporcione el radio del circulo'
	Leer radio
	// 2. Realizamos los calculos
	area_circulo = PI * radio ^ 2
	perimetro_circulo = 2 * PI * radio
	Imprimir 'Area del circulo: ', area_circulo
	Imprimir 'Perimetro del circulo: ', perimetro_circulo
FinAlgoritmo
