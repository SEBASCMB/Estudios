Algoritmo EjercicioDiaSemana
	Escribir 'Proporcione el dia de la semana: '
	Leer dia_semana
	Si dia_semana==1 Entonces
		Escribir 'Lunes'
	SiNo
		Si dia_semana==2 Entonces
			Escribir 'Martes'
		SiNo
			Si dia_semana==3 Entonces
				Escribir 'Miercoles'
			SiNo
				Si dia_semana==4 Entonces
					Escribir 'Jueves'
				SiNo
					Si dia_semana==5 Entonces
						Escribir 'Viernes'
					SiNo
						Si dia_semana==6 Entonces
							Escribir 'Sabado'
						SiNo
							Si dia_semana==7 Entonces
								Escribir 'Domingo'
							SiNo
								Imprimir 'Valor de dia erroneo: ', dia_semana
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinAlgoritmo
