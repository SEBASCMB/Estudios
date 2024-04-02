Algoritmo MesEstacionSiNo
	Definir estacion Como Cadena
	Imprimir 'Proporciona el mes del año (1-12): '
	Leer mes
	Si mes == 12 O mes == 1 O mes == 2 Entonces
		estacion = 'Invierno'
	SiNo
		Si mes == 3 O mes == 4 O mes == 5 Entonces
			estacion = 'Primavera'
		SiNo
			Si mes == 6 O mes == 7 O mes == 8 Entonces
				estacion = 'Verano'
			SiNo
				Si mes == 9 O mes == 10 O mes == 11 Entonces
					estacion = 'Otoño'
				SiNo
					estacion = 'Mes incorrecto'
				Fin Si
			Fin Si
		Fin Si
	FinSi
	// Imprimimos el resultado
	Imprimir 'Para el mes ', mes, ' la estacion es ', estacion
FinAlgoritmo
