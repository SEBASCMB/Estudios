#include <iostream>
#include <string>

int main () {
  using namespace std;
  const float PI = 3.14;
  float radio, largo, ancho;
  char opcion;

  cout << "Elige una opcion: \n\n"
  << "a) Perimetro de rectangulo\n"
  << "b) Area de rectangulo\n"
  << "c) Perimetro de circunferencia\n"
  << "d) Area de circunferencia\n\n"
  << "x) SALIR\n\n"
  << ">> ";

  cin >> opcion;

  if (opcion == 'a')
  {
    cout << "Largo = ";
    cin >> largo;
    cout << "Ancho = ";
    cin >> ancho;
    cout << "Perimetro = " << largo * 2 + ancho * 2;
  } else if (opcion == 'b')
  {
    cout << "Largo = ";
    cin >> largo;
    cout << "Ancho = ";
    cin >> ancho;
    cout << "Area = " << largo * ancho;
  } else if (opcion == 'c')
  {
    cout << "Radio = ";
    cin >> radio;
    cout << "Perimetro = " << radio * 2 * PI;
  } else if (opcion == 'd')
  {
    cout << "Radio = ";
    cin >> radio;
    cout << "Area = " << radio * radio * PI;
  } else if (opcion == 'x')
  {
    return 0;
  } else
  {
    cout << "ERROR: Ingresa una opcion valida.";
  }
  return 0;
}