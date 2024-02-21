#include <iostream>
#include <string>

int main()
{
  int puntos = 0;
  int puntosMoneda;

  std::cout << "Ingresa los puntos a sumar: ";
  std::cin >> puntosMoneda;

  puntos += puntosMoneda;

  std::cout << "Puntos = " << puntos << " - puntosMoneda " << puntosMoneda << std::endl;

  std::cout << "Ingresa los puntos: ";
  std::cin >> puntosMoneda;

  puntos += puntosMoneda;

  std::cout << "Puntos = " << puntos << " - puntosMoneda " << puntosMoneda << std::endl;

  std::cout << "Ingresa los puntos: ";
  std::cin >> puntosMoneda;

  puntos += puntosMoneda;

  std::cout << "Puntos = " << puntos << " - puntosMoneda " << puntosMoneda << std::endl;
}