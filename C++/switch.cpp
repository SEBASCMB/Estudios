#include <iostream>
#include <string>

int main()
{
  using namespace std;

  const float PI = 3.14;
  float radio, largo, ancho;
  char opcion;

  cout << "Elige una opcion: \n\n"
       << "a) Perimetro de rectangulo.\n"
       << "b) Area de rectangulo\n"
       << "c) Perimetro de circunferencia\n"
       << "d) Area de circuferencia\n\n"
       << "x) SALIR\n\n"
       << ">> ";

  cin >> opcion;

  switch (opcion)
  {
  case 'a':
      cout << "Largo = ";
      cin >> largo;
      cout << "Ancho = ";
      cin >> ancho;
      cout << "Perimetro = " << largo * 2 + ancho * 2;
      break;

  case 'b':
      cout << "Largo = ";
      cin >> largo;
      cout << "Ancho = ";
      cin >> ancho;
      cout << "Area = " << largo * ancho;
      break;

  case 'c':
      cout << "Radio = ";
      cin >> radio;
      cout << "Perimetro = " << radio * 2 * PI;
      break;

  case 'd':
      cout << "Radio = ";
      cin >> radio;
      cout << "Area = " << radio * radio * PI;
      break;

  case 'x':
    return 0;
  default:
    cout << "ERROR: Ingresa una opcion valida.";
  }
  return 0;
}