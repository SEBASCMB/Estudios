#include <iostream>
#include <string>

int main()
{
  std::string nombre1, nombre2;
  int edad1, edad2;
  std::cout << "Escribe tu nombre: ";
  std::cin >> nombre1;
  std::cout << "Ingresa tu edad: ";
  std::cin >> edad1;

  std::cout << "Escribe tu nombre: ";
  std::cin >> nombre2;
  std::cout << "Ingresa tu edad: ";
  std::cin >> edad2;

  std::cout << "Hola " << nombre1 << ", es un gusto conocerte a tus " << edad1 << " años " << std::endl;
  std::cout << "Hola " << nombre2 << ", es un gusto conocerte a tus " << edad2 << " años " << std::endl;
}