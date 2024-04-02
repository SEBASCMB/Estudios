Algoritmo AsistirJuegoHijo
	Imprimir 'Tiene vacaciones? (Verdadero o falso): '
	Leer vacaciones
	Imprimir 'Es dia de descanso? (Verdadero o falso): '
	Leer dia_descanso
	// Revisamos si puede asistir al juego del hijo
	Si vacaciones O dia_descanso Entonces
		Imprimir 'Puedes asistir al juego del hijo'
	SiNo
		Imprimir 'Tiene deberes por hacer, no puede asistir'
	Fin Si
FinAlgoritmo
