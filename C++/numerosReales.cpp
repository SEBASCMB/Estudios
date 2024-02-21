#include <iostream>
#include <string>

int main()
{
  int base, altura;
  float area;

  std::cout << "Ingresa la base y la altura ";
  std::cin >> base >> altura;

  area = (float)(base * altura) / 2;
  std::cout << "AREA = " << area;
}